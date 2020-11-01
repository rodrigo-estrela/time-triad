const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = {
  async store(req, res) {
    const user = await User.findById(req.user.id);
    user.timeTriad.done = true;
    for (let key in req.body) {
      user.timeTriad.quiz[key] = req.body[key];
    }

    console.log('quiz answers from dashboard');
    console.log(req.body);
    const importante = parseCategories(user.timeTriad.quiz, 'i');
    const urgente = parseCategories(user.timeTriad.quiz, 'u');
    const circunstancial = parseCategories(user.timeTriad.quiz, 'c');

    const total = importante + urgente + circunstancial;

    user.timeTriad.importante = parseInt((importante / total) * 100);
    user.timeTriad.urgente = parseInt((urgente / total) * 100);
    user.timeTriad.circunstancial = parseInt((circunstancial / total) * 100);

    user.timeTriad.model = computeModel(user.timeTriad);

    const response = await user.save();
    return res.status(200).send(response);
  },
};

function parseCategories(quiz, categorie) {
  const result = [];
  for (let i = 0; i < 6; i++) {
    result.push(quiz[categorie + i]);
  }

  return result.reduce((acc, curr) => acc + curr);
}

function computeModel({ importante, urgente, circunstancial }) {
  if (urgente > importante && circunstancial > importante) {
    return 'Super-man';
  }

  if (circunstancial > importante && circunstancial > urgente) {
    return 'Homer Simpson';
  }

  if (importante >= urgente && urgente > circunstancial) {
    return 'Ideal';
  }

  return 'Tightrope walker';
}
