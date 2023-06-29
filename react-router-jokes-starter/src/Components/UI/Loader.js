import styles from "./Loader.module.css";
import React from "react";
const Loader = () => {
  return <div className={styles["lds-hourglass"]}></div>;
};

export default Loader;
