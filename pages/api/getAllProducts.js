import { getProducts } from "../../controller/productController";

export default async function handler(req, res) {
  const result = await getProducts();
  res.json(result);
}
