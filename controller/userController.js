const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getUsers = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute("SELECT * FROM `users`");
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getUser = async (user) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM users WHERE user= '${user}' `
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createUser = async (user, fullname, hashedPassword) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO users ( user, password, fullname) VALUES ("${user}","${hashedPassword}", "${fullname}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteUserById = async (userId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM users WHERE userId = ${userId};`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const users = {
  getUsers,
  getUser,
  createUser,
  deleteUserById,
};

module.exports = users;
