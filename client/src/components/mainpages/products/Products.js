import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import Loading from "../utils/loading/Loading";

import ProductItem from "../utils/productItem/ProductItem";
import "./products.css";
import Filters from "./Filters";
const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsApi.products;
  const [isAdmin, setIsAdmin] = state.userApi.isAdmin;
  return (
    <>
      <Filters />
      <div className="products">
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              product={product}
              isAdmin={isAdmin}
            />
          );
        })}
      </div>
      {products.length === 0 && <Loading />}
    </>
  );
};
export default Products;
