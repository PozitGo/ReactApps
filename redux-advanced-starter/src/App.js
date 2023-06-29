import React from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, reciveCartData } from "./Store/CartSlice";
import StatusBarMessage from "./components/UI/StatusBarMessage";

let isInitialRunning = true;
function App() {
  const isCartVisible = useSelector((state) => state.main.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const statusMessage = useSelector((state) => state.main.statusMessage);

  const dispatchAction = useDispatch();

  useEffect(() => dispatchAction(reciveCartData()), []);
  useEffect(() => {
    if (isInitialRunning) {
      isInitialRunning = false;
      return;
    }

    if (cart.isCartContentChanged) {
      dispatchAction(sendCartData(cart));
    }
  }, [cart]);

  return (
    <React.Fragment>
      {statusMessage && (
        <StatusBarMessage
          status={statusMessage.status}
          title={statusMessage.title}
          message={statusMessage.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
