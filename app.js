import experss from "express";
import { PORT } from "./config/env.js";

const app = experss();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
