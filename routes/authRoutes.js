const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      if (req.user.timeTriad.done) {
        return res.redirect('/dashboard');
      }

      return res.redirect('/quiz');
    }
  );

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      if (req.user.timeTriad.done) {
        return res.redirect('/dashboard');
      }

      return res.redirect('/quiz');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    return res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    return res.send(req.user);
  });
};
