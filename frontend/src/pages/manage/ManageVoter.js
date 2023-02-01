import { useState, useEffect } from "react";
import Voter from "../../components/Voter";
import { GetVoter } from "../../api/ApiHandler";

const ManageVoter = () => {
  const [voterData, setVoterData] = useState([]);
  useEffect(() => {
    GetVoter().then((data) => {
      setVoterData(data);
    });
  }, []);

  return voterData.map((item) => (
    <Voter
      key={item.id}
      id={item.id}
      name={item.name}
      address={item.address}
      social_number={item.social_number}
    />
  ));
};

export default ManageVoter;
