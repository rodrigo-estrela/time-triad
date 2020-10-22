const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.send(renderUsers(users));
  }
}

function renderUsers(users) {
  return users.map(user => {
    return {
      name: user.name,
      email: user.email,
      picture: user.picture,
      importante: user.timeTriad.importante,
      urgente: user.timeTriad.urgente,
      circunstancial: user.timeTriad.circunstancial
    }
  })
}