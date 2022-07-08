const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// 2. create schema for entity
const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  username: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  userid: { type: String, required: true},
  followers: [String],
  following: [String]
})

// 3. create model of schema
const User = mongoose.model("User", userSchema);

// 4. create CRUD functions on model
//CREATE A USER
async function register(username, password, name) {
  const user = await getUser(username);
  if(user) throw Error('Username already in use');

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name: name,
    username: username,
    password: hashed,
    userid: username
  });

  return newUser._doc;
}

//READ USER DATA 
async function login(username, password) {
  const user = await getUser(username);
  if(!user) throw Error('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) throw Error('Wrong Password');
  return user._doc;
}

//UPDATE PASSWORD
async function updatePassword(id, password) {
  const user = await User.updateOne({"_id": id}, {$set: { password: password}});
  return user;
}

//DELETE
async function deleteUser(id) {
  await User.deleteOne({"_id": id});
};

//GET USER
async function getUser(username) {
  return await User.findOne({ "username": username});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deleteUser 
};