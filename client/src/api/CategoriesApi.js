import axios from "axios";
import React, { useEffect, useState } from "react";

function CategoriesApi() {
  const [categories, setcategories] = useState([]);
  const [callback, setCallback] = useState(false);
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("https://still-lake-63515.herokuapp.com/api/category");
      setcategories(res.data);
    };
    getCategories();
  }, [callback]);
  return {
    categories: [categories, setcategories],
    callback: [callback, setCallback],
  };
}

export default CategoriesApi;
