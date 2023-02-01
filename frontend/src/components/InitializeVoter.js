import { InitializeVoter, GetVoter } from "../api/ApiHandler";

const InitalizeVoter = () => {
  const resetVoterHandler = (event) => {
    GetVoter().then((data) => {
      data.forEach((item) => {
        InitializeVoter(item.id).then((response) => {
          console.log(response);
        });
      });
    });
  };

  return <button onClick={resetVoterHandler}>Reset Voter</button>;
};

export default InitalizeVoter;
