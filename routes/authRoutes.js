const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};

// mongodb+srv://rodrigoestrela:Rse.ckxc29@final-project-prod.0gwy5.mongodb.net/final-project-prod?retryWrites=true&w=majority

// ClientID: 323395734845-fdikmt8k52o1fehu58o8h6uk8pa3h7tb.apps.googleusercontent.com
// ClientSecret: QrNclhDG1AkzOJuip7Xb6j8x
