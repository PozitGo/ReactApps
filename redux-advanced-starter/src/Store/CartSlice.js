import { createSlice } from "@reduxjs/toolkit";
import { mainActions } from "./MainSlice";

const initialState = {
  items: [],
  itemsQuantity: 0,
  isCartContentChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.itemsQuantity++;
      state.isCartContentChanged = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.itemsQuantity--;
      state.isCartContentChanged = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    updateCart(state, action) {
      state.items = action.payload.items;
      state.itemsQuantity = action.payload.itemsQuantity;
    },
  },
});

export const sendCartData = (cartData) => {
  return async (dispatchAction) => {
    dispatchAction(
      mainActions.showStatusMessage({
        status: "pending",
        title: "Отправка данных",
        message: "Данные корзины отправляются",
      })
    );

    const sendHttpRequest = async () => {
      const response = await fetch(
        "https://reduxstart-30bad-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка отправки данных корзины");
      }
    };

    try {
      await sendHttpRequest();

      dispatchAction(
        mainActions.showStatusMessage({
          status: "success",
          title: "Данные успешно отправлены",
          message: "Данные корзины успешно отправлены на сервер!",
        })
      );
    } catch (error) {
      dispatchAction(
        mainActions.showStatusMessage({
          status: "error",
          title: "Ошибка отправки",
          message: "Ошибка отправки данных корзины",
        })
      );
    }
  };
};

export const reciveCartData = () => {
  return async (dispatchAction) => {
    const reciveHttpRequest = async () => {
      const response = await fetch(
        "https://reduxstart-30bad-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Невозможно извлечь данные из корзины");
      }

      const responseData = await response.json();

      return responseData;
    };

    try {
      const CartData = await reciveHttpRequest();
      dispatchAction(
        cartSlice.actions.updateCart({
          items: CartData.items || [],
          itemsQuantity: CartData.itemsQuantity,
        })
      );
    } catch (error) {
      dispatchAction(
        mainActions.showStatusMessage({
          status: "error",
          title: "Ошибка получения",
          message: "Ошибка получения данных корзины",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
