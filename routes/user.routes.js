import { Router } from "express";

const userRouter = Router();

// GET /users - Get all users
// GET /users/:id - Get user by id>
// POST /users - Create a new user
// PUT /users/:id - Update user by id
// DELETE /users/:id - Delete user by id

userRouter.get("/", (req, res) => res.send({ title: "GET all users" }));

userRouter.get("/:id", (req, res) => res.send({ title: "GET user by id" }));

userRouter.post("/", (req, res) => res.send({ title: "Create a new user" }));

userRouter.put("/:id", (req, res) => res.send({ title: "Update user by id" }));

userRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete user by id" })
);

export default userRouter;
