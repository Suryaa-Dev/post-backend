import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  username: { type: String, required: true },
  caption: { type: String },
  image: { type: String, required: true },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Post", postSchema);
