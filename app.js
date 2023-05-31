import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/post", (_req, res) => {
  const posts = Array.from({ length: 20 }, (_, index) => ({ postId: index }));
  console.log(posts);

  res.status(200).json(posts);
});

export default app;
