// 1. import any needed libraries
const express = require("express");
const Connection = require('../models/connection'); //accesses functions in connection model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/login', async (req, res) => {
    try {
      const Connection = await Connection.login(req.body.connectionname, req.body.password);
      res.send({...connection, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const connection = await Connection.register(req.body.connectionname, req.body.password);
      res.send({...connection, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/update', async (req, res) => {
    try {
      const connection = await Connection.updatePassword(req.body.id, req.body.password);
      res.send({...connection, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Connection.deleteConnection(req.body.id);
      res.send({ success: "Account deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;