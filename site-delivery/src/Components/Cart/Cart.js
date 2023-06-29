import React, { useContext } from "react";
import CartContext from "../../assets/Store/Cart-Context";
import Modal from "../UI/Modal.js";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const TotalAmount = `$${Math.abs(cartContext.totalAmount.toFixed(2))}`;
  const HasItems = cartContext.items.length > 0;

  const RemoveCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const AddCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={AddCartItemHandler.bind(null, item)}
          onRemove={RemoveCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого:</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles["button--alt"]}>
          Закрыть
        </button>
        {HasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Cart;
