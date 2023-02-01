const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const {
  createVoter,
  getVoterById,
  getVoter,
  deleteVoter,
  getVoterBySocialNumber,
  updateVoterById,
  InitializeVoterByID,
} = require("../service/voterService");

module.exports = {
  createVoter: (req, res) => {
    const salt = genSaltSync(5);
    req.body.v_id = uuidv4().split("-").join(salt).split(".").join("");
    createVoter(req.body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection failed",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  updateVoterById: (req, res) => {
    console.log(`voter id = ${req.body.id}`);
    updateVoterById(req.body.id, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection failed",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  InitializeVoterByID: (req, res) => {
    console.log(req.body.id)
    InitializeVoterByID(req.body.id, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection failed",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getVoterById: (req, res) => {
    const id = req.params.id;
    getVoterById(id, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection failed",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getVoterBySocialNumber: (req, res) => {
    const socialNumber = req.params.socialNumber;
    getVoterBySocialNumber(socialNumber, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection failed",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getVoter: (req, res) => {
    getVoter((error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  deleteVoter: (req, res) => {
    const id = req.body.id;
    deleteVoter(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
};
