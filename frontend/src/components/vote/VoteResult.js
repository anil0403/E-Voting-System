import { useState, useEffect } from "react";
import { GetCategory, DeleteVote } from "../../api/ApiHandler";
import VoteResultTable from "./VoteResultTable";

const VoteResult = () => {
  const [categoryData, setcategoryData] = useState([]);
  useEffect(() => {
    GetCategory().then((data) => {
      setcategoryData(data);
    });
    DeleteVote().then((response) => {
      console.log(response);
    });
  }, []);

  // console.log(categoryData);
  return categoryData.map((item) => (
    <VoteResultTable key={item.id} category={item.category_item} />
  ));
};

export default VoteResult;
