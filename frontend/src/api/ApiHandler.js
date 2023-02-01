import axios from "axios";

// get all candidate details (get request)
export const GetCandidate = async () => {
  return await axios({
    method: "get",
    url: "http://localhost:3001/get-candidate",
    responseType: "json",
  }).then((response) => {
    return response.data.data;
  });
};

// get all category details (get request)
export const GetCategory = async () => {
  return await axios({
    method: "get",
    url: "http://localhost:3001/get-category",
    responseType: "json",
  }).then((response) => {
    // console.log(response.data.data);
    return response.data.data;
  });
};

//get all voter details (get request)
export const GetVoter = async () => {
  return await axios({
    method: "get",
    url: "http://localhost:3001/get-voter",
    responseType: "json",
  }).then((response) => {
    return response.data.data;
  });
};

// Get voter by social number
export const GetVoterBySocialNumber = async (para) => {
  return axios({
    method: "get",
    url: `http://localhost:3001/get-voter-by-socialNumber`,
    params: {
      social_number: para,
    },
    responseType: "json",
  }).then((response) => {
    return response.dada.data;
  });
};

// add category (post request)
export const AddCategory = async (newCategory) => {
  return await axios({
    method: "post",
    url: "http://localhost:3001/create-category",
    data: {
      category_item: newCategory,
    },
  }).then((response) => {
    return response;
  });
};

// add Candidate (post request)
export const AddCandidate = async (
  newName,
  newAddress,
  newSocialNumber,
  category
) => {
  return await axios({
    method: "post",
    url: "http://localhost:3001/create-candidate",
    data: {
      name: newName,
      address: newAddress,
      social_number: newSocialNumber,
      category: category,
    },
  }).then((response) => {
    return response;
  });
};

// add Voter (post request)
export const AddVoter = async (newName, newAddress, newSocialNumber) => {
  return await axios({
    method: "post",
    url: "http://localhost:3001/create-voter",
    data: {
      name: newName,
      address: newAddress,
      social_number: newSocialNumber,
    },
  }).then((response) => {
    return response;
  });
};

// create transaction (post request)
export const CreateTransaction = async (transaction) => {
  return await axios({
    method: "post",
    url: "http://localhost:3001/transaction-broadcast",
    data: transaction,
  }).then((response) => {
    return response;
  });
};

//count vote data (get request)
export const CountVote = async () => {
  return await axios({
    method: "GET",
    url: "http://localhost:3001/count-vote",
    responseType: "json",
  }).then((response) => {
    return response.data.data;
  });
};

// update voter flag (post request)
export const UpdateVoter = async (id) => {
  return await axios({
    method: "POST",
    url: "http://localhost:3001/update-voter",
    data: {
      id: id,
    },
    responseType: "json",
  }).then((response) => {
    return response;
  });
};

// delete category
export const DeleteCategory = async (id) => {
  return await axios({
    method: "delete",
    url: "http://localhost:3001/delete-category/",
    data: {
      id: id,
    },
    responseType: "json",
  }).then((response) => {
    return response;
  });
};

// delete candidate
export const DeleteCandidate = async (id) => {
  return await axios({
    method: "delete",
    url: "http://localhost:3001/delete-candidate/",
    data: {
      id: id,
    },
    responseType: "json",
  }).then((response) => {
    return response;
  });
};

//delete Voter
export const DeleteVoter = async (id) => {
  return await axios({
    method: "delete",
    url: "http://localhost:3001/delete-voter/",
    data: {
      id: id,
    },
    responseType: "json",
  }).then((response) => {
    return response;
  });
};

// create vote (post request)
export const CreateVote = async (name, candidate, category, votes) => {
  return await axios({
    method: "post",
    url: "http://localhost:3001/create-vote/",
    data: {
      name: name,
      c_id: candidate,
      category: category,
      votes: votes,
    },
    responseType: "json",
  }).then((response) => {
    return response;
  });
};
// delete vote (delete request)
export const DeleteVote = async () => {
  return await axios({
    method: "delete",
    url: "http://localhost:3001/delete-vote/",
    responseType: "json",
  }).then((response) => {
    return response;
  });
};

// initialize voter (post request)
export const InitializeVoter = async (id) => {
  return await axios({
    method: "post",
    url: "http://localhost:3001/initialize-voter-by-id/",
    data: {
      id: id,
    },
    responseType: "json",
  }).then((response) => {
    return response;
  });
};
