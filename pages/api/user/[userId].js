const bcrypt = require("bcrypt");

import {
  getUserById,
  deleteUserById,
  createUser,
} from "../../../controller/userController";

export default async function handler(req, res) {
  const userId = req.query.userId;

  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getUser(user);
      res.json(result);
      break;

    case "DELETE":
      result = await deleteUserById(userId);
      res.json({ ...result, message: `user with userId: ${userId} deleted` });
      break;

    case "POST":
      const user = req.body.user;
      const fullname = req.body.fullName;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      result = await createUser(user, fullname, hashedPassword);
      res.json({ ...result, message: `user with name: ${user} created` });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
