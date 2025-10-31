import express from "express";
import multer from "multer";
import { createPost, getPosts, likePost } from "../controllers/post.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.post("/", upload.single("image"), createPost);
router.get("/", getPosts);
router.post("/:id/like", likePost);

export default router;
