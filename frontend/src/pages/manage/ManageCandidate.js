import { useState, useEffect } from "react";
import Candidate from "../../components/candidate";
import { GetCandidate } from "../../api/ApiHandler";

const ManageCandidate = () => {
  const [candidateData, setCandidateData] = useState([]);
  useEffect(() => {
    GetCandidate().then((data) => {
      setCandidateData(data);
    });
  }, []);

  return candidateData.map((item) => (
    <Candidate
      key={item.id}
      id ={item.id}
      name={item.name}
      address={item.address}
      social_number={item.social_number}
      category={item.category}
    />
  ));
};

export default ManageCandidate;
