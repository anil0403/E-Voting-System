import { DeleteCategory } from "../api/ApiHandler";

const Category = (props) => {
  const id = props.id;
  // console.log(props.category);
  const deleteHandler = (event) => {
    // console.log("Executing delete handler");
    // console.log(`id  = ${id}`)
    DeleteCategory(id).then((response) => {
      console.log(response);
    });
  };
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.category}</td>
      <td>
        <form onSubmit={deleteHandler}>
          <button type="submit">Delete</button>
        </form>
      </td>
    </tr>
  );
};

export default Category;
