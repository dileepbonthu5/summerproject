// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const connectionSchema = new mongoose.Schema({
  connectionname: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  followers: [String],
  following: [String]
})

// 3. create model of schema
const Connection = mongoose.model("Connection", connectionSchema);

// 4. create CRUD functions on model
//CREATE a connection
async function register(connectionname, password) {
  const connection = await getConnection(connectionname);
  if(connection) throw Error('Connectionname already in use');

  const newConnection = await Connection.create({
    connectionname: connectionname,
    password: password
  });

  return newConnection;
}

// READ a connection
async function login(connectionname, password) {
  const connection = await getConnection(connectionname);
  if(!connection) throw Error('Connection not found');
  if(connection.password != password) throw Error('Wrong Password');

  return connection;
}

// UPDATE
async function updatePassword(id, password) {
  const connection = await Connection.updateOne({"_id": id}, {$set: { password: password}});
  return connection;
}

//DELETE
async function deleteConnection(id) {
  await Connection.deleteOne({"_id": id});
};

// utility functions
async function getConnection(connectionname) {
  return await Connection.findOne({ "connectionname": connectionname});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deleteConnection 
};