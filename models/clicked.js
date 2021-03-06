'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clicked extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clicked.init({
    ip_address: DataTypes.STRING,
    agent: DataTypes.STRING,
    pullData: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clicked',
  });
  return Clicked;
};