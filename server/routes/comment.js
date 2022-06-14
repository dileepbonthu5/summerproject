// 1. import any needed libraries
const express = require("express");
const Comment = require('../models/comment'); //accesses functions in comment model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/login', async (req, res) => {
    try {
      const Comment = await Comment.login(req.body.username, req.body.password);
      res.send({...comment, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const comment = await Comment.register(req.body.commentname, req.body.password);
      res.send({...comment, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const comment = await Comment.updatePassword(req.body.id, req.body.password);
      res.send({...comment, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Comment.deleteComment(req.body.id);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;