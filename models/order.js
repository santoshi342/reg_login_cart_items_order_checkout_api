'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Order.hasMany(models.Order_item, {
        foreignKey:'order_id',
        as:'order_items'
      });

      Order.belongsTo(models.User,{
        foreignKey:'user_id',
        as:'user'
      })


      //Tutorial.hasMany(Comment, { as: "comments" });



    }
  };
  Order.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};