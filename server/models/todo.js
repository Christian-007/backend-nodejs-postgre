module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Define the relationship of Todo model
  Todo.associate = models => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: "todoId",
      as: "todoItems", // alias for TodoItem model when querying
    });
  };

  return Todo;
};
