const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    questionTxt: String,
    answerOptions: [{ answerTxt: String, isCorrect: Boolean }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
