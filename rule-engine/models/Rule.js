const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Rule extends Model {}

Rule.init({
rule_string: {
type: DataTypes.STRING,
},
ast: {
type: DataTypes.JSONB,
},
}, {
sequelize,
modelName: 'Rule',
});

module.exports = Rule;