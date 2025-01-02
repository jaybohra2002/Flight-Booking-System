'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(model.Airplanes,{
        foreignKey:'airplaneId'
      });
      this.belongsTo(model.Airplane,{
        foreignKey:'arrivalAirportId'
      });
      this.belongsTo(model.Airplane,{
        foreignKey:'departureAirportId'
      });
    }
  }
  Flight.init({
    FlightNumber: {
      type:DataTypes.STRING,
      allowNull:false
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportId:{
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalAirportId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalTime: {
      type:DataTypes.INTEGER,
      allowNull:false

    },
    departureTime: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate:{
      type:DataTypes.INTEGER,
    },
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};