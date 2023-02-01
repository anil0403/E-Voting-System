import { useState } from "react";
import { AddCategory } from "../api/ApiHandler";

const CategoryForm = () => {
  const [category, CategoryHandler] = useState("");

  const addCategoryHandler = (event) => {
    console.log(event.target.value);
    CategoryHandler(event.target.value);
  };
  const submitHandler = (event) => {
    // event.preventDefault();
    AddCategory(category).then((response) => {
      console.log(response);
    });

    CategoryHandler("");
  };
  return (
    <form onSubmit={submitHandler} className="Category-item">
      <input
        onChange={addCategoryHandler}
        value={category}
        type="text"
        placeholder="Enter category"
        required
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
