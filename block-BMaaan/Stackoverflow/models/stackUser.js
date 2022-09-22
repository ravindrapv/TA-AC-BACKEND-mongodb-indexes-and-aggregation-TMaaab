var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stackSchema = new Schema(
  {
    users: { type: String },
    questions: { type: String },
    answers: [{ type: String }],
    replies: { type: String },
    questionsUpvote: { type: Number },
    questionsDownvote: { type: Number },
    answersUpvote: { type: Number },
    answersDownvote: { type: Number },
    repliesUpvote: { type: Number },
    repliesDownvote: { type: Number },
    tagsQuestion: [{ type: String }],
    viewsQuestion: { type: String },
    reputation: { type: Number },
  },
  { timestamps: true }
);
stackSchema.index({ username: 1, unique: true });
stackSchema.index({ email: 1, unique: true });

module.exports = mongoose.model('Stack', stackSchema);