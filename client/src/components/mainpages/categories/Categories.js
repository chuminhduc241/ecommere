import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import "./category.css";
function Categories() {
  const state = useContext(GlobalState);
  const [categories, setCategories] = state.categoriesApi.categories;
  const [callback, setCallback] = state.categoriesApi.callback;
  const [category, setCategory] = useState("");
  const [token] = state.token;
  const [onEdit, setOnEdit] = useState(false);
  const [ID, setID] = useState("");
  const createCategory = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        const res = await axios.put(
          `/api/category/${ID}`,
          { name: category },
          {
            headers: { Authorization: token },
          }
        );
        setCallback(!callback);
      } else {
        const res = await axios.post(
          "https://still-lake-63515.herokuapp.com/api/category",
          { name: category },
          {
            headers: { Authorization: token },
          }
        );
        setCallback(!callback);
        console.log(res.data);
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const editCategory = async (id, name) => {
    try {
      setID(id);
      setCategory(name);
      setOnEdit(true);
    } catch (error) {}
  };
  const deleteCategory = async (id) => {
    try {
      const res = await axios.delete(`https://still-lake-63515.herokuapp.com/api/category/${id}`, {
        headers: { Authorization: token },
      });
      setCallback(!callback);
    } catch (error) {}
  };
  return (
    <div className="categories">
      <form onSubmit={createCategory}>
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">{onEdit ? "Update" : "Save"}</button>
      </form>
      <div className="col">
        {categories.map((category) => (
          <div className="row" key={category._id}>
            <p>{category.name}</p>
            <div>
              <button onClick={() => editCategory(category._id, category.name)}>
                Edit
              </button>
              <button onClick={() => deleteCategory(category._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
