import "./Manage.css";
import Navbar from "../../components/Navbar";
import ManageCandidate from "./ManageCandidate";
import ManageCategory from "./ManageCategory";
import ManageVoter from "./ManageVoter";
import InitalizeVoter from "../../components/InitializeVoter";

const Manage = () => {
  return (
    <div className="content">
      <Navbar />
      <div className="header">
        <span>Manage Category Candidates and Voters</span>
      </div>
      <div className="display-data">
        <div className="display-item">
          <span>Manage Category</span>
          <table>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <ManageCategory />
            </tbody>
          </table>
        </div>
        <div className="display-item">
          <span>Manage Candidate</span>
          <table>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Address</th>
                <th>Social Number</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <ManageCandidate />
            </tbody>
          </table>
        </div>
        <div className="display-item">
          <span>Manage Voter</span>
          <InitalizeVoter/>
          <table>
            
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Address</th>
                <th>Social Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <ManageVoter />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manage;
