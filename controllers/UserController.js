const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.status(200).send(renderUsers(users));
  },
};

function renderUsers(users) {
  return users.map((user) => {
    let result = 'Quiz not done yet';
    if (user.timeTriad.done) {
      result = `Model: ${user.timeTriad.model} (I:${user.timeTriad.importante} | U:${user.timeTriad.urgente} | C:${user.timeTriad.circunstancial})`;
    }
    return {
      name: user.name,
      email: user.email,
      picture: user.picture,
      quizStatus: user.timeTriad.done,
      result: result,
    };
  });
}
