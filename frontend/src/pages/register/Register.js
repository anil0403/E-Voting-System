import "./Register.css";
import Navbar from "../../components/Navbar";
import CandidateForm from "../../form/CandidateForm";
import VoterForm from "../../form/VoterForm";
import CategoryForm from "../../form/CategoryForm";
const Register = () => {
  return (
    <div className="content">
      <Navbar />
      <div className="header">
        <span>Management Application</span>
      </div>
      <CategoryForm/>
      <div className="container">
        <div className="container-candidate">
          <span>Candidate Registration</span>
          <CandidateForm />
        </div>
        <div className="container-candidate">
          <span>Voter Registration</span>
          <VoterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
