import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./assets/Store/CartContextProvider";
function App() {
  const [CartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      {CartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}
export default App;
