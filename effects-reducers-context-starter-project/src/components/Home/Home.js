import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import styles from "./Home.module.css";
import AuthContext from "../../Context/Auth-Context";
import Button from "../UI/Button/Button";

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
      <Button onClick={ctx.onLogout}>Выход</Button>
    </Card>
  );
};

export default Home;
