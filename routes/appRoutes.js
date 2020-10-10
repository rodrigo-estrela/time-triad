const QuestionController = require("../controllers/QuestionController");
const QuizController = require("../controllers/QuizController");

module.exports = (app) => {
  app.get("/api/questions", QuestionController.index);
  app.post("/api/questions", QuestionController.store);

  app.post("/api/quiz", QuizController.store);
};
