const pool = require("../../config/database");

module.exports = {
  createVoter: (data, callBack = () => {}) => {
    pool.query(
      `INSERT INTO voter (name, address, social_number, v_id) VALUES(?,?,?,?)`,
      [data.name, data.address, data.social_number, data.v_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateVoterById: (id, callBack = () => {}) => {
    pool.query(
      `UPDATE voter SET flag = true WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  InitializeVoterByID: (id, callBack = () => {}) => {
    pool.query(
      `UPDATE voter SET flag = false WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getVoterById: (id, callBack = () => {}) => {
    pool.query(
      `SELECT * FROM voter WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getVoterBySocialNumber: (socialNumber, callBack = () => {}) => {
    pool.query(
      `SELECT * FROM voter WHERE social_number = ?`,
      [socialNumber],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getVoter: (callBack = () => {}) => {
    pool.query(`SELECT * FROM voter`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  deleteVoter: (id, callBack) => {
    pool.query(
      `DELETE FROM voter WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
