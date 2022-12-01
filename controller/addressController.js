const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getAddress = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute("SELECT * FROM `address` ");
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getAddressById = async (addressId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM address WHERE addressId = ${addressId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createAddress = async (address, address_vn, address2, address2_vn) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO address ( address, address_vn, address2, address2_vn) VALUES ('${address}', '${address_vn}', '${address2}', '${address2_vn}');`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateAddress = async (
  addressId,
  updatedAddress,
  updatedAddress_vn,
  updatedAddress2,
  updatedAddress2_vn
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE address SET address = "${updatedAddress}", address_vn = "${updatedAddress_vn}", address2 = "${updatedAddress2}", address2_vn = "${updatedAddress2_vn}" WHERE addressId = "${addressId}"`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteAddressId = async (addressId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM address WHERE addressId = ${addressId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const address = {
  getAddress,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddressId,
};

module.exports = address;
