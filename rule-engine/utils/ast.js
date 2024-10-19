const Node = require('../models/Node');  
  
function createAST(ruleString) {  
  const tokens = parser.tokenize(ruleString);  
  const astTree = [];  
  tokens.forEach((token) => {  
   if (token.type === 'operator') {  
    const node = new Node({  
      type: token.value,  
      left: null,  
      right: null,  
    });  
    astTree.push(node);  
   } else if (token.type === 'operand') {  
    const node = new Node({  
      type: 'operand',  
      value: token.value,  
    });  
    astTree.push(node);  
   }  
  });  
  return astTree;  
}  
  
function combineASTs(rules) {  
  const combinedAST = [];  
  rules.forEach((rule) => {  
   combinedAST.push(...rule.ast);  
  });  
  return combinedAST;  
}  
  
function evaluateAST(astTree, data) {  
  const result = [];  
  astTree.forEach((node) => {  
   if (node.type === 'operator') {  
    const leftResult = evaluateAST(node.left, data);  
    const rightResult = evaluateAST(node.right, data);  
    if (node.value === 'AND') {  
      result.push(leftResult && rightResult);  
    } else if (node.value === 'OR') {  
      result.push(leftResult || rightResult);  
    }  
   } else if (node.type === 'operand') {  
    const value = data[node.value];  
    result.push(value);  
   }  
  });  
  return result;  
}  
  
module.exports = { createAST, combineASTs, evaluateAST };
