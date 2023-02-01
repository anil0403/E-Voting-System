const pool = require("../../config/database");

module.exports = {
  createCategory: (data, callBack = () => {}) => {
    pool.query(
      `INSERT INTO category (category_item) VALUES(?)`,
      [data.category_item],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getCategoryById: (id, callBack = () => {}) => {
    pool.query(
      `SELECT * FROM category WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getCategory: (callBack = () => {}) => {
    pool.query(`SELECT * FROM category`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  deleteCategory: (id, callBack) => {
    pool.query(
      `DELETE FROM category WHERE id = ?`,
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
