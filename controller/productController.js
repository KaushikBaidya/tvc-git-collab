const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const createProduct = async (name, description, image, category) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO products ( name, description, image, category) VALUES ('${name}', '${description}', '${image}', '${category}');`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getProducts = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute("SELECT * FROM `products`");
    return rows;
  } catch (e) {
    console.error(e);
  }
};
const getProductsByBiomass = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `products` WHERE category = 1"
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};
const getProductsByMineral = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `products` WHERE category = 2"
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

// const getProductsByCategory = async (categoryId) => {
//   try {
//     const connection = await mysql.createConnection(mysqlConfig);
//     const [rows, fields] = await connection.execute(
//       `SELECT * FROM products_en WHERE category = "${categoryId}"`
//     );
//     return rows;
//   } catch (e) {
//     console.error(e);
//   }
// };

const getProductById = async (productId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM products WHERE productId = ${productId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateProduct = async (
  productId,
  updateName,
  updateDescription,
  updateImage
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE products SET name = "${updateName}", description= "${updateDescription}", image="${updateImage}" WHERE productId = ${productId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteProductById = async (productId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM products WHERE productId = ${productId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const products = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
  getProductsByBiomass,
  getProductsByMineral,
};

module.exports = products;
