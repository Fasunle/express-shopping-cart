const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  _id: ObjectId,
  title: String
});

module.exports = mongoose.model("blog", BlogPost);