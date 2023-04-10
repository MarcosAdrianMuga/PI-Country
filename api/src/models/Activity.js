const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("activity", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    difficulty: {
        type: DataTypes.ENUM('1','2','3','4','5')
    },
    duration: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    season: {
        type: DataTypes.ENUM(
          "summer",
          "sutumn",
          "winter",
          "spring"
        ),
        allowNull: false
    }
  },{
    timestamps: false
  });
};
