const pool = require("../../config/database");

module.exports = {
  createCandidate: (data, callBack = () => {}) => {
    pool.query(
      `INSERT INTO candidate (name, address, social_number, c_id, category) VALUES(?,?,?,?,?)`,
      [data.name, data.address, data.social_number, data.c_id, data.category],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getCandidateById: (id, callBack = () => {}) => {
    pool.query(
      `SELECT * FROM candidate WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getCandidateByCategory: (category, callBack = () => {}) => {
    pool.query(
      `SELECT * FROM candidate WHERE category = ?`,
      [category],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getCandidate: (callBack = () => {}) => {
    pool.query(`SELECT * FROM candidate`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  deleteCandidate: (id, callBack) => {
    pool.query(
      `DELETE FROM candidate WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
