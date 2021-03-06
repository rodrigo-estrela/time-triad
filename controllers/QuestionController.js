const mongoose = require('mongoose');
const Question = mongoose.model('questions');

module.exports = {
  async index(req, res) {
    const questions = await Question.find();

    return res.status(200).send(questions);
  },

  async store(req, res) {
    console.log(req.body);
    const question = await new Question({
      id: req.body.id,
      group: req.body.group,
      description: req.body.description,
    }).save();

    return res.status(200).send(question);
  },
};
