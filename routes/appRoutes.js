const QuestionController = require("../controllers/QuestionController");
const QuizController = require("../controllers/QuizController");
const UserController = require('../controllers/UserController')

function adminRequired(req, res, next) {
  if (req.user.role !== "admin") {
    res.redirect("/");
  }

  next();
}

module.exports = (app) => {
  app.get("/api/questions", QuestionController.index);
  app.post("/api/questions", adminRequired, QuestionController.store);

  app.post("/api/quiz", QuizController.store);

  app.get('/api/users', UserController.index);
};
