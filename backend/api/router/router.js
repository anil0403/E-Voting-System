const router = require("express").Router();

//importing controllers

const {
  createCategory,
  getCategory,
  getCategoryById,
  deleteCategory,
} = require("../controller/categoryController");
const {
  createCandidate,
  getCandidate,
  getCandidateById,
  getCandidateByCategory,
  deleteCandidate,
} = require("../controller/candidateController");
const {
  createVoter,
  getVoter,
  getVoterById,
  deleteVoter,
  getVoterBySocialNumber,
  updateVoterById,
  InitializeVoterByID,
} = require("../controller/voterController");
const {
  CreateVote,
  DeleteVote,
  GetVote,
} = require("../controller/voteController");

// router for category

router.post("/create-category", createCategory);
router.get("/get-category", getCategory);
router.get("/get-category-by-id/:id", getCategoryById);
router.delete("/delete-category", deleteCategory);

// router for candidate

router.post("/create-candidate", createCandidate);
router.get("/get-candidate", getCandidate);
router.get("/get-candidate-by-id/:id", getCandidateById);
router.get("/get-candidate-by-category/:category", getCandidateByCategory);
router.delete("/delete-candidate", deleteCandidate);

// router for voter

router.post("/create-voter", createVoter);
router.get("/get-voter", getVoter);
router.get("/get-voter-by-id/:id", getVoterById);
router.get("/get-voter-by-socialNumber/:socialNumber", getVoterBySocialNumber);
router.delete("/delete-voter", deleteVoter);
router.post("/update-voter", updateVoterById);
router.post("/initialize-voter-by-id", InitializeVoterByID);

//router for vote
router.post("/create-vote", CreateVote);
router.delete("/delete-vote", DeleteVote);
router.get("/get-stored-vote", GetVote);

module.exports = router;
