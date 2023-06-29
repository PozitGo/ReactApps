import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux/es/hooks/useSelector";
function App() {
  const isUserLoggedIn = useSelector((state) => state.userAuth.isUserLoggedIn);
  return (
    <React.Fragment>
      <Header />
      {!isUserLoggedIn && <Auth />}
      {isUserLoggedIn && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
