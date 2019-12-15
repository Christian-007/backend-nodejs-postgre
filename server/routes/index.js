const todosController = require("../controllers").todos;

/**
 * Takes an 'app' as an argument
 * to have access to app methods (app.get, app.post, etc.)
 */
module.exports = app => {
  // A Welcome Route
  app.get("/api", (req, res) => {
    return res.status(200).send({
      message: "Welcome to the todos API",
    });
  });

  // Create a todo based on the passed body req
  app.post("/api/todos", todosController.create);

  // Lists all created todos
  app.get("/api/todos", todosController.list);
};
