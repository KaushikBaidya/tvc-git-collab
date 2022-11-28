import { getProductsByMineral } from "../../controller/productController";

export default async function handler(req, res) {
  const result = await getProductsByMineral();
  res.json(result);
}
