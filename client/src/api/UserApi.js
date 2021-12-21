import axios from "axios";
import React, { useEffect, useState } from "react";

function UserApi(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("https://still-lake-63515.herokuapp.com/user/infor", {
            headers: { Authorization: token },
          });
          console.log(res);
          setIsLogged(true);
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
          setCart(res.data.cart);
        } catch (error) {
          alert(error.respone.data.msg);
        }
      };
      getUser();
    }
  }, [token]);
  const addCart = async (product) => {
    if (!isLogged) return alert("Please loggin to continue buying");
    const check = cart.every((item) => {
      return item._id != product._id;
    });
    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);
      await axios.patch(
        "https://still-lake-63515.herokuapp.com/user/addcart",
        { cart: [...cart, { ...product, quantity: 1 }] },
        {
          headers: { Authorization: token },
        }
      );
    } else {
      alert("This product has been added to cart");
    }
  };
  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    addCart: addCart,
    cart: [cart, setCart],
  };
}

export default UserApi;
