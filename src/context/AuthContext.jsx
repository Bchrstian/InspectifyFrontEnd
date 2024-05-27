// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token from cookies on load:", token); // Log the token on load
    setIsLoggedIn(!!token);
  }, []);

  const login = (token) => {
    Cookies.set("token", token, { expires: 7 }); // Set token with an expiration of 7 days
    console.log("Token set in cookies:", token); // Log the token when set
    setIsLoggedIn(true);
  };

  const logout = () => {
    Cookies.remove("token");
    console.log("Token removed from cookies"); // Log when token is removed
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
