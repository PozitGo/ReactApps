import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginInfo = localStorage.getItem("isLoggedIn");
    if (storedLoginInfo === "1") {
      setLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
