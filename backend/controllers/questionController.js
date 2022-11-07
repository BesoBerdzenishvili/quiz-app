const Question = require("../models/questionModel");
const mongoose = require("mongoose");

// get all questions
const getQuestions = async (req, res) => {
  const questions = await Question.find({}).sort({ createdAt: -1 });

  res.status(200).json(questions);
};

// create a new question
const createQuestion = async (req, res) => {
  const { question, a, b, c, d } = req.body;

  let emptyFields = [];

  if (!question) {
    emptyFields.push("question");
  }
  if (!a) {
    emptyFields.push("a");
  }
  if (!b) {
    emptyFields.push("b");
  }
  if (!c) {
    emptyFields.push("c");
  }
  if (!d) {
    emptyFields.push("d");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const quiz = await Question.create({ question, a, b, c, d });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a question
const deleteQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such question" });
  }

  const question = await Question.findOneAndDelete({ _id: id });

  if (!question) {
    return res.status(400).json({ error: "No such question" });
  }

  res.status(200).json(question);
};

// update a question
const updateQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such question" });
  }

  const question = await Question.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!question) {
    return res.status(400).json({ error: "No such question" });
  }

  res.status(200).json(question);
};

module.exports = {
  getQuestions,
  createQuestion,
  deleteQuestion,
  updateQuestion,
};
