import express from "express";
import { createUser, getUser } from "../Services/UserService";

const UserRouter = express.Router();

UserRouter.get(`/:id`, async (req, res) => {
  const { id }: { id?: string } = req.params;
  console.log(id);
  const user = await getUser(id);
  res.json(user);
});

UserRouter.post("/signup", async (req, res) => {
  const { name, email } = req.body;
  const result = await createUser(name, email);
  res.json(result);
});

export default UserRouter;
