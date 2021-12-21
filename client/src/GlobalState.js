import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import ProductsApi from "./api/ProductsApi";
import UserApi from "./api/UserApi";
import CategoriesApi from "./api/CategoriesApi";

export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const state = {
    token: [token, setToken],
    productsApi: ProductsApi(),
    userApi: UserApi(token),
    categoriesApi: CategoriesApi(),
  };
  const refreshToken = async () => {
    const res = await axios.get(
      "https://still-lake-63515.herokuapp.com//user/refresh_token"
    );
    setToken(res.data.accesstoken);
  };
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) refreshToken();
  }, []);
  console.log(CategoriesApi());
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
