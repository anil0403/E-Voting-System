import { useState, useEffect } from "react";
import Category from "../../components/Category";
import { GetCategory } from "../../api/ApiHandler";

const ManageCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    GetCategory().then((data) => {
      setCategoryData(data);
    });
  }, []);

  return categoryData.map((item) => (
    <Category
      key={item.id}
      id={item.id}
      category={item.category_item}
    />
  ));
};

export default ManageCategory;
