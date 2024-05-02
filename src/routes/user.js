const { create, get, getById } = require("../controllerts/user");

exports.routes = (app) => {
  app.post("/v1/user", create);
  app.get("/v1/user", get);
  app.get("/v1/user/:id", getById);
};
