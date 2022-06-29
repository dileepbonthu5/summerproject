// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const commentSchema = new mongoose.Schema({
  commentname: { type: String, unique: true, required: true},
  commentid: { type: String, required: true},
})

// 3. create model of schema
const Comment = mongoose.model("Comment", commentSchema);

// 4. create CRUD functions on model
//CREATE a comment
async function register(commentname, commentid) {
  const comment = await getcomment(commentname);
  if(comment) throw Error('commentname already in use');

  const newComment = await Comment.create({
    commentname: commentname,
    commentid: commentid
  });

  return newComment;
}

// READ a comment
async function login(commentname, commentid) {
  const comment = await getComment(commentname);
  if(!comment) throw Error('Comment not found');
  if(comment.commentid !=commentid ) throw Error('id not found');

  return comment;
}

// UPDATE
async function updatePassword(id, password) {
  const comment = await Comment.updateOne({"_id": id}, {$set: { password: password}});
  return comment;
}

//DELETE
async function deleteComment(id) {
  await Comment.deleteOne({"_id": id});
};

// utility functions
async function getComment(commentname) {
  return await Comment.findOne({ "commentname": commentname});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deleteComment 
};