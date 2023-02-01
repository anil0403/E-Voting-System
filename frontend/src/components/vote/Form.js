import { useState, useEffect } from "react";
import CategorySelectionForm from "./CategorySelectionForm";
import { GetCandidate } from "../../api/ApiHandler";
const Form = (props) => {

  //fetching candidate data
  const [candidateData, setCandidateData] = useState([]);
  useEffect(() => {
    GetCandidate().then((data) => {
      setCandidateData(data);
    });
  }, []);

  //filtering data according to category
  const candidateArray = candidateData.filter((item) => {
    if (props.category === item.category) return item;
    else return null;
  });

  const categoryHandler = (event) => {
    const [name, category, c_id] = event.target.value.split(",");
    const voteData = {
      name: name,
      category: category,
      c_id: c_id,
    };

    props.onVoteDataHandler(voteData);
  };

  return (
    <div className="form-item">
      <label>{props.category}</label>
      <select onChange={categoryHandler}>
        <option value="none" selected disabled hidden>
          Select Candidates
        </option>
        ;
        {candidateArray.map((item) => (
          <CategorySelectionForm
            key={item.id}
            name={item.name}
            category={item.category}
            c_id={item.c_id}
          />
        ))}
      </select>
    </div>
  );
};

export default Form;
