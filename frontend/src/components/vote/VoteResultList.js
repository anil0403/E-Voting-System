import { useEffect } from "react";
import { CreateVote } from "../../api/ApiHandler";
const VoteResultList = (props) => {
  useEffect(() => {
    CreateVote(props.name, props.candidate, props.category, props.votes).then(
      (response) => {
        console.log(response);
      }
    );
  }, [props.name, props.candidate, props.category, props.votes]);

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.votes}</td>
    </tr>
  );
};

export default VoteResultList;
