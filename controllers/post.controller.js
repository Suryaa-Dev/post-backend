import Post from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const { username, caption } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    const post = new Post({ username, caption, image });
    await post.save();
    res.json({ message: "Post uploaded successfully", post });
  } catch (err) {
    res.status(500).json({ error: "Error creating post" });
  }
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  post.likes += 1;
  await post.save();
  res.json(post);
};
