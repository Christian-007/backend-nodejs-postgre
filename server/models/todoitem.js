module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define("TodoItem", {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  /**
   * If we delete a Todo,
   * its associated todoItems should be deleted as well
   * (cascade the delete action)
   */
  TodoItem.associate = models => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: "todoId",
      onDelete: "CASCADE",
    });
  };

  return TodoItem;
};
