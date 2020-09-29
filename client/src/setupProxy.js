const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api/logout", "/api/current_user", "/api/questions", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
