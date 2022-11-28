const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getCategories = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `categories` "
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getCategorySelect = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT categoryId as listId, category as listName FROM `categories` "
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getCategoryById = async (categoryId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM categories WHERE categoryId = ${categoryId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createCategory = async (category) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO categories ( category ) VALUES ("${category}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateCategory = async (categoryId, updatedCategory) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE categories SET category = "${updatedCategory}" WHERE categoryId = ${categoryId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteCategoryId = async (categoryId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM categories WHERE categoryId = ${categoryId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const categories = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  getCategorySelect,
  deleteCategoryId,
};

module.exports = categories;
