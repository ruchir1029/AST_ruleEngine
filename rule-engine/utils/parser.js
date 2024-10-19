function tokenize(ruleString) {  
  const tokens = [];  
  const regex = /\s*(\w+)\s*(\W+)\s*(\w+)\s*/g;  
  let match;  
  while ((match = regex.exec(ruleString)) !== null) {  
   tokens.push({  
    type: match[1],  
    value: match[2],  
   });  
  }  
  return tokens;  
}  
  
module.exports = { tokenize };
