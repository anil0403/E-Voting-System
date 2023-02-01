import { DeleteCandidate } from "../api/ApiHandler";
const Candidate = (props) => {
  const id = props.id;
  const deleteHandler = (event) => {
    // event.preventDefault();
    // console.log(id);
    DeleteCandidate(id).then((response) => {
      console.log(response);
    });
  };

  return (
    <tr>
      <td> {props.id} </td>
      <td>{props.name}</td>
      <td>{props.address}</td>
      <td>{props.social_number}</td>
      <td>{props.category}</td>
      <td>
        <form onSubmit={deleteHandler}>
          <button type="submit">Delete</button>
        </form>
      </td>
    </tr>
  );
};

export default Candidate;
