import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import { createPost, getPosts, likePost } from "../controllers/post.controller.js";

const router = express.Router();

// 🔥 Cloudinary storage instead of local "uploads/"
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "post_uploads", // folder name in your Cloudinary dashboard
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), createPost);
router.get("/", getPosts);
router.post("/:id/like", likePost);

export default router;
