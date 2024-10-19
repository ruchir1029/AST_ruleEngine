// models/Node.js  
const { Model, DataTypes } = require('sequelize');  
const sequelize = require('../database');  
  
class Node extends Model {}  
  
Node.init({  
  type: {  
   type: DataTypes.STRING,  
  },  
  left_node: {  
   type: DataTypes.INTEGER,  
  },  
  right_node: {  
   type: DataTypes.INTEGER,  
  },  
  value: {  
   type: DataTypes.STRING,  
  },  
}, {  
  sequelize,  
  modelName: 'Node',  
});  
  
module.exports = Node;
