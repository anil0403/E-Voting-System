import "./Vote.css";
import VoteForm from "../../form/VoteForm";
import VoteResult from "../../components/vote/VoteResult";
const Vote = () => {
  return (
    <div className="content">
      <div className="header">
        <span>BLOCKCHAIN BASED E-VOTING AND RESULT</span>
      </div>

      <div className="container-voter">
        <div className="vote">
          <span>Select Candidate and Enter Social Number</span>
          <VoteForm />
        </div>
        <div className="result">
          <span className="title">Voting Result</span>
          <VoteResult />
        </div>
      </div>
    </div>
  );
};

export default Vote;
