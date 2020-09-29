const Question = require("../models/Question");
const QuestionController = require("../controllers/QuestionController");

module.exports = (app) => {
  app.get("/api/questions", QuestionController.index);
  app.post("/api/questions", QuestionController.store);
};
