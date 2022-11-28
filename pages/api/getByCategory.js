import { getProductsByCategory } from "../../controller/productController";

export default async function handler(req, res) {
  const result = await getProductsByCategory();
  res.json(result);
}
