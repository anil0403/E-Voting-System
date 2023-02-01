const CategorySelectionForm = (props) => {

  const voteData = [props.name, props.category, props.c_id];

  return <option value={voteData}>{props.name}</option>;
};
export default CategorySelectionForm;
