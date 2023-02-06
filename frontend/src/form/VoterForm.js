import { useState } from "react";
import { AddVoter } from "../api/ApiHandler";
const VoterForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [social_number, setSocial_number] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const addressHandler = (event) => {
    setAddress(event.target.value);
  };
  const social_numberHandler = (event) => {
    setSocial_number(event.target.value);
  };
  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };
  const submitHandler = (event) => {
    // event.preventDefault();
    AddVoter(name, address, social_number, phoneNumber).then((response) => {
      console.log(response);
    });

    setName("");
    setAddress("");
    setSocial_number("");
    setPhoneNumber("");
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
        <label for="name">Phone Number</label>
        <input
          onChange={phoneNumberHandler}
          value={phoneNumber}
          type="number"
          placeholder="98/7 xxxxxxxx"
          required
        />
      </div>
      <div className="form-item">
        <button className="btn" type="submit">
          Add Voter
        </button>
      </div>
    </form>
  );
};

export default VoterForm;
