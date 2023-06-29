import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import SubmitOrder from "./SumbitOrder";

const Cart = (props) => {
  const [isSumbitOrderAvailable, setIsSumbitOrderAvailable] = useState(false);
  const [isDataSubmiting, setIsDataSubmiting] = useState(false);
  const [wasDataSendingSeccessful, setWasDataSendingSeccessful] =
    useState(false);
  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const OrderHandler = () => {
    setIsSumbitOrderAvailable(true);
  };

  const sumbitOrderHandler = async (userData) => {
    setIsDataSubmiting(true);
    const response = await fetch(
      "https://sitedilivery-default-rtdb.firebaseio.com/Orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedMeals: cartContext.items,
        }),
      }
    );
    setIsDataSubmiting(false);
    setWasDataSendingSeccessful(true);
    cartContext.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {isSumbitOrderAvailable && (
        <SubmitOrder
          onSubmit={sumbitOrderHandler}
          onCancel={props.onHideCart}
        />
      )}
      <div className={styles.actions}>
        {!isSumbitOrderAvailable && (
          <button className={styles["button--alt"]} onClick={props.onHideCart}>
            Закрыть
          </button>
        )}
        {hasItems && !isSumbitOrderAvailable && (
          <button className={styles.button} onClick={OrderHandler}>
            Заказать
          </button>
        )}
      </div>
    </React.Fragment>
  );

  const DataSumbittingCartModalContent = <p>Отправка данных заказа...</p>;
  const DataWasSubmitedCartModalContent = (
    <React.Fragment className={styles.actions}>
      <p>Ваш заказ успешно отправлен</p>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Закрыть
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isDataSubmiting && !wasDataSendingSeccessful && cartModalContent}
      {isDataSubmiting && DataSumbittingCartModalContent}
      {wasDataSendingSeccessful && DataWasSubmitedCartModalContent}
    </Modal>
  );
};

export default Cart;
