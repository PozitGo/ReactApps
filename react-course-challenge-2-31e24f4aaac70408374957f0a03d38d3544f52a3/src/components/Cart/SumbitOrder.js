import { useRef, useState } from "react";
import styles from "./SubmitOrder.module.css";

const isInputValid = (inputValue) => inputValue.trim() !== "";

const SubmitOrder = (props) => {
  const [formValid, setFormValid] = useState({
    name: true,
    city: true,
    address: true,
  });

  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    const Order = {
      name: nameInputRef.current.value,
      city: cityInputRef.current.value,
      address: addressInputRef.current.value,
    };

    const isNameValid = isInputValid(Order.name);
    const isCityValid = isInputValid(Order.city);
    const isAddressValid = isInputValid(Order.address);

    setFormValid({
      name: isNameValid,
      city: isCityValid,
      address: isAddressValid,
    });

    const isFormValid = isNameValid && isCityValid && isAddressValid;

    if (isFormValid) {
      props.onSubmit(Order);
    } else {
      return;
    }
  };
  return (
    <form className={styles.form} onSubmit={confirmOrderHandler}>
      <div
        className={`${styles.control} ${formValid.name ? "" : styles.invalid}`}
      >
        <label htmlFor="name">Введите имя</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div
        className={`${styles.control} ${formValid.city ? "" : styles.invalid}`}
      >
        <label htmlFor="city">Введите город</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div
        className={`${styles.control} ${
          formValid.address ? "" : styles.invalid
        }`}
      >
        <label htmlFor="address">Введите адрес</label>
        <input type="text" id="address" ref={addressInputRef} />
      </div>
      <div className={styles.actions}>
        <button className={styles.submit} type="submit">
          Подтвердить заказ
        </button>
        <button type="button" onClick={props.onCancel}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default SubmitOrder;
