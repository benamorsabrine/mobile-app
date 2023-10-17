import axios from "axios";
import React, { useState } from "react";
import { createContext } from "react";

import { BASE_URL } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({ isLoading: false });

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const login = (email, password) => {
    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo); //afficher user info dans consol e
        AsyncStorage.setItem("userInfo", Json.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`login error ${e}`);
      });
  };
  const logout = () => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/logout`, {
        Headers: { Authorization: `Bearer ${userInfo.access_token}` },
      })
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`logout error ${e}`);
      });
  };
  return (
    <AuthContext.Provider value={{ isLoading, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
