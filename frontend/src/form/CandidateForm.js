import { useState, useEffect } from "react";
import { GetCategory, AddCandidate, AddVoter } from "../api/ApiHandler";
const CandidateForm = () => {
  // fetching category data
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    GetCategory().then((data) => {
      setCategoryData(data);
    });
  }, []);

  // // // // // /// /// ////// /// /
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [social_number, setSocial_number] = useState("");
  const [category, setCategory] = useState("");
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const addressHandler = (event) => {
    setAddress(event.target.value);
  };
  const social_numberHandler = (event) => {
    setSocial_number(event.target.value);
  };
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };
  const submitHandler = (event) => {
    // event.preventDefault();
    AddCandidate(name, address, social_number, category).then((response) => {
      console.log(response);
    });
    AddVoter(name, address, social_number).then((response) => {
      console.log(response);
    });
    setName("");
    setAddress("");
    setSocial_number("");
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form-item">
        <label for="name">Name</label>
        <input
          onChange={nameHandler}
          value={name}
          type="text"
          placeholder="Enter your full name"
          required
        />
      </div>
      <div className="form-item">
        <label for="name">Address</label>
        <input
          onChange={addressHandler}
          value={address}
          type="text"
          placeholder="Enter your address"
          required
        />
      </div>
      <div className="form-item">
        <label for="name">Social Number</label>
        <input
          onChange={social_numberHandler}
          value={social_number}
          type="number"
          placeholder="Enter your citizenship/nid id"
          required
        />
      </div>
      <div className="form-item">
        <label for="name">Select Category</label>
        <select
          onClick={categoryHandler}
          id="category"
          name="category"
          required
        >
          <option value="Null" disabled selected hidden>
            Select Category
          </option>
          {categoryData.map((item) => (
            <option key={item.id} value={item.category_item}>
              {item.category_item}
            </option>
          ))}
        </select>
      </div>
      <div className="form-item">
        <button className="btn" type="submit">
          Add Candidate
        </button>
      </div>
    </form>
  );
};

export default CandidateForm;
