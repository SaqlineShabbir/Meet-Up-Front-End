import Post from "../../models/postModel";
import { connectMongo } from "../../utils/connect";

export default async function addPost(req, res) {
  await connectMongo();
  console.log("Conneted to db");
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        const posts = await Post.find();
        return res.status(200).json(posts);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const post = await Post.create(body);
        console.log("document created");
        res.json({ post });
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
  }
}
