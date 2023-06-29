import { Fragment } from "react";
import Header from "./Header";
import styles from "./Layout.module.css";
import React from "react";
const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
