/* eslint-disable no-unused-vars */
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
});

export const useAuth = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);
  const userAuth = [];

  // Register User
  const register = (username, password) => {
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify(userAuth));

      userAuth.push({
        name: username,
        password: password,
      });

      setCurrentUser(username);
    }, 3000);
  };

  // Login User
  // const login = (email, password) => {};

  // useEffect(() => {}, []);

  const value = {
    currentUser,
    register,
    // login,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
