const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    a: { answer: String, isTrue: Boolean },

    b: { answer: String, isTrue: Boolean },

    c: { answer: String, isTrue: Boolean },

    d: { answer: String, isTrue: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
