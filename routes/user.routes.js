import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

// GET /users - Get all users
// GET /users/:id - Get user by id>
// POST /users - Create a new user
// PUT /users/:id - Update user by id
// DELETE /users/:id - Delete user by id

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => res.send({ title: "Create a new user" }));

userRouter.put("/:id", (req, res) => res.send({ title: "Update user by id" }));

userRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete user by id" })
);

export default userRouter;
