import { getProductsByBiomass } from "../../controller/productController";

export default async function handler(req, res) {
  const result = await getProductsByBiomass();
  res.json(result);
}
