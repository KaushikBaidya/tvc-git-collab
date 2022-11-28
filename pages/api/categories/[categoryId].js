import {
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategoryId,
} from "../../../controller/categoryController";

export default async function handler(req, res) {
  const categoryId = req.query.categoryId;
  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getCategoryById(categoryId);
      res.json(result);
      break;

    case "DELETE":
      result = await deleteCategoryId(categoryId);
      res.json({
        ...result,
        message: `category with categoryId: ${categoryId} deleted`,
      });
      break;

    case "POST":
      const category = req.body.category;

      result = await createCategory(category);
      res.status(201).json({
        ...result,
        message: `category with title: ${category} created`,
      });
      break;

    case "PUT":
      const updatedCategory = req.body.category;

      result = await updateCategory(categoryId, updatedCategory);
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
