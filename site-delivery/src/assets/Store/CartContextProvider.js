import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updateAddTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingAddCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });
      const existingAddCartItem = state.items[existingAddCartItemIndex];
      let updatedItem;
      let updatedItems;

      if (existingAddCartItem) {
        updatedItem = {
          ...existingAddCartItem,
          amount: existingAddCartItem.amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingAddCartItemIndex] = updatedItem;
      } else {
        updatedItem = {
          ...action.item,
        };

        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updateAddTotalAmount,
      };

    case "REMOVE_ITEM":
      const existingRemoveCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.id;
      });
      const existingRemoveCartItem = state.items[existingRemoveCartItemIndex];
      const updateRemoveTotalAmount =
        state.totalAmount - existingRemoveCartItem.price;

      let updatedRemoveItems;
      if (!existingRemoveCartItem.amount === 1) {
        updatedRemoveItems = state.items.filter(
          (item) => item.id !== action.id
        );
      } else {
        const updatedItem = {
          ...existingRemoveCartItem,
          amount: existingRemoveCartItem.amount - 1,
        };

        updatedRemoveItems = [...state.items];
        updatedRemoveItems[existingRemoveCartItem] = updatedItem;
      }

      return {
        items: updatedRemoveItems,
        totalAmount: updateRemoveTotalAmount,
      };
    default:
      return defaultCartState;
  }
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const сartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={сartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
