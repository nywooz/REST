const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET BACK ALL POSTS
router.get("/", async (req, res) => {
  // console.log("Middlewares running");
  // res.send("<h1>we are on posts</h1>");
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A POST
router.post("/", async (req, res) => {
  // create new post
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  // save new post
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).send(err);
    res.json({ message: err });
  }
});

// GET BACK SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.postId);
    res.json(specificPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE SPECIFIC POST
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// PATCH SPECIFIC POST
router.patch("/:postId", async (req, res) => {
  try {
    const patchedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(patchedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
