const express = require("express");
const router = express.Router();
const { Blog } = require("../models/blog");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:blogId", async (req, res) => {
  try {
    const removeblog = await Blog.findOneAndDelete({ _id: req.params.blogId });
    res.json(removeblog);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
