const Todo = require("../models").Todo;

module.exports = {
  create(req, res) {
    return Todo.create({
      title: req.body.title,
    })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Todo.findAll()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
};
