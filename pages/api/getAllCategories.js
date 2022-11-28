import { getCategories } from "../../controller/categoryController";

export default async function handler(req, res) {
  const result = await getCategories();
  res.json(result);
}
