// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const postSchema = new mongoose.Schema({
  postname: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  followers: [String],
  following: [String]
})

// 3. create model of schema
const Post = mongoose.model("Post", postSchema);

// 4. create CRUD functions on model
//CREATE a post
async function register(postname,postid,postcontent) {
  const post = await getPost(postname);
  if(post) throw Error('Postname already in use');

  const newPost = await Post.create({
    postname: postname,
    postid: postid,
    postcontent:postcontent
  });

  return newPost;
}

// READ a post
async function login(postname, password) {
  const post = await getPost(postname);
  if(!post) throw Error('Post not found');
  if(post.password != password) throw Error('Wrong Password');

  return post;
}

// UPDATE
async function updatePassword(id, password) {
  const post = await Post.updateOne({"_id": id}, {$set: { password: password}});
  return post;
}

//DELETE
async function deletePost(id) {
  await Post.deleteOne({"_id": id});
};

// utility functions
async function getPost(postname) {
  return await Post.findOne({ "postname": postname});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deletePost 
};