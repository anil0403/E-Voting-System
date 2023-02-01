import { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/vote/Form";
import { GetCategory, CreateTransaction, UpdateVoter } from "../api/ApiHandler";
const VoteForm = () => {
  const [buttonState, setButtomState] = useState(false);
  const [socialNumber, setsocialNumber] = useState("");
  const [receivedVoteData, setReceivedVoteData] = useState([]);
  const voteDataHandler = (data) => {
    //filtering repetation of voteData
    console.log(data.category);
    const filteredVoteData = receivedVoteData.filter((item) => {
      if (item.category !== data.category) {
        return item;
      } else return null;
    });
    setReceivedVoteData([...filteredVoteData, data]);
  };

  // fetching categories
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    GetCategory().then((data) => {
      setCategoryData(data);
    });
  }, []);

  const [alert, setAlert] = useState("");
  const [v_id, setv_id] = useState("");
  const [id, setId] = useState(null);
  const socialNumberHandler = (event) => {
    setsocialNumber(event.target.value);
    axios({
      method: "get",
      url: `http://localhost:3001/get-voter-by-socialNumber/${event.target.value}`,
      responseType: "json",
    }).then((response) => {
      try {
        const voterData = response.data.data;
        const social_number = voterData[0].social_number;
        const flag = voterData[0].flag;
        if (social_number === Number(event.target.value)) {
          if (flag) {
            setAlert("Already Voted");
            setButtomState(false);
          } else {
            setAlert("You can Vote");
            setButtomState(true);
            console.log(social_number);
            console.log(voterData[0].id);
            setv_id(voterData[0].v_id);
            setId(voterData[0].id);
          }
        }
      } catch (err) {
        setAlert("Unregistered Voter");
        setButtomState(false);
      }
    });
  };
  const submitHandler = (event) => {
    // event.preventDefault();
    const transaction = [];
    UpdateVoter(id).then((response) => {
      console.log(response);
    });
    receivedVoteData.map((item) =>
      transaction.push({
        //transaction data name, category, c_id (candidate unieque addr), socialNumber->v_id(voter unieque addr)
        ...item,
        v_id: v_id,
      })
    );

    console.log(transaction);
    CreateTransaction(transaction).then((response) => {
      // console.log(response);
      //
    });
  };

  return (
    <form onSubmit={submitHandler} action="">
      {categoryData.map((item) => (
        <Form
          key={item.id}
          category={item.category_item}
          onVoteDataHandler={voteDataHandler}
        />
      ))}
      <div className="form-item">
        <label for="">Enter Social Number</label>
        <input
          type="number"
          onChange={socialNumberHandler}
          value={socialNumber}
          required
        />
        <span>{alert}</span>
      </div>
      <div className="form-item">
        <button disabled={!buttonState} type="submit">
          Vote
        </button>
      </div>
    </form>
  );
};

export default VoteForm;
