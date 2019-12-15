module.exports = {
  /**
   * The up function will be executed, when migration is running
   * It will take care of creating the table and its associated columns
   */
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Todos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  /**
   * Undo whatever the up function did
   * Returning our database to the same state it was in
   * before we performed the migration
   */
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("Todos"),
};
