import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Cart from "./icon/cart.svg";
import Close from "./icon/close.svg";
import { Link } from "react-router-dom";
import "./header.css";
import axios from "axios";
export const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isAdmin, setIsAdmin] = state.userApi.isAdmin;
  const [cart, setCart] = state.userApi.cart;

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };
  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.clear();
    setIsAdmin(false);
    setIsLogged(false);
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link onClick={logoutUser} to="/">
            Logout
          </Link>
        </li>
      </>
    );
  };

  return (
    <header>
      <div className="menu">
        <img src={Menu} width="30px" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? "Admin" : "CMD Shop"}</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
          </li>
          {isAdmin && adminRouter()}
          {isLogged ? (
            loggedRouter()
          ) : (
            <li>
              <Link to="/login">Login or Register</Link>{" "}
            </li>
          )}
          <li>
            <img src={Close} />
          </li>
        </ul>
      </div>
      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={Cart} alt="" width="30px" />
          </Link>
        </div>
      )}
    </header>
  );
};
