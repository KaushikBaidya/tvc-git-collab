import { getCategorySelect } from "../../controller/categoryController";

export default async function handler(req, res) {
  const result = await getCategorySelect();
  res.json(result);
}
