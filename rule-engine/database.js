const { Sequelize } = require('sequelize');  

const sequelize = new Sequelize('rule_engine', 'postgres', 'Ruchir@123', {  
  host: 'localhost',  
  dialect: 'postgres',  
});  
  
module.exports = sequelize;
