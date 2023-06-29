import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Япона кухня</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Блюяда японской кухни" />
      </div>
    </React.Fragment>
  );
};

export default Header;
