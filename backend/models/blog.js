const express = require("express");
const app = express();
const mongoose = require("mongoose");

const blog_schema = new mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model("Blog", blog_schema);
exports.Blog = Blog;
