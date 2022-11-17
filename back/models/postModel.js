const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
  dateCreate: { type: Date },
  like: { type: String },
  dislike: { type: String },
  location: { type: String }
});

module.exports = mongoose.model("Post", postSchema);


