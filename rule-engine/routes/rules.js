const express = require('express');  
const router = express.Router();  
const sequelize = require('../database');
const Rule = require('../models/Rule');  
const Node = require('../models/Node');  
const ast = require('../utils/ast');  
const parser = require('../utils/parser');  
  
router.post('/create_rule', async (req, res) => {  
  const ruleString = req.body.rule_string;  
  const astTree = ast.createAST(ruleString);  
  const rule = await Rule.create({ rule_string: ruleString, ast: astTree });  
  res.json(rule);  
});  
  
router.post('/combine_rules', async (req, res) => {  
  const rules = req.body.rules;  
  const combinedAST = ast.combineASTs(rules);  
  res.json(combinedAST);  
});  
  
router.post('/evaluate_rule', async (req, res) => {  
  const astTree = req.body.ast;  
  const data = req.body.data;  
  const result = ast.evaluateAST(astTree, data);  
  res.json(result);  
});  
  
module.exports = router;
