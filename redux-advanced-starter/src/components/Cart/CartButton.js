import { useDispatch } from "react-redux";
import { mainActions } from "../../Store/MainSlice";
import { useSelector } from "react-redux";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const TotalQuantity = useSelector((state) => state.cart.itemsQuantity);
  const dispatchAction = useDispatch();
  const cartVisibilityHandler = () =>
    dispatchAction(mainActions.toggleCartVisibility());

  return (
    <button className={styles.button} onClick={cartVisibilityHandler}>
      <span>Корзина</span>
      <span className={styles.badge}>{TotalQuantity}</span>
    </button>
  );
};

export default CartButton;
