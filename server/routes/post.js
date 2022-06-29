// 1. import any needed libraries
const express = require("express");
const Post = require('../models/post'); //accesses functions in post model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/login', async (req, res) => {
    try {
      const Post = await Post.login(req.body.postname, req.body.postid, req.body.postcontent);
      res.send({...post });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const post = await Post.register(req.body.postname, req.body.postid, req.body.postcontent);
      res.send({...post });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/update', async (req, res) => {
    try {
      const post = await Post.updatePost(req.body.postname, req.body.postid, req.body.postcontent);
      res.send({...post});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Post.deletePost(req.body.postname, req.body.postid, req.body.postcontent);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;