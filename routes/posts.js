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

// router.get("/specific", async (req, res) => {
//   try {
//     const specificPost = await res.send("<h1>We are on specific post</h1>");
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

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

module.exports = router;
