const express = require('express');  
const app = express();  
const rulesRouter = require('./routes/rules');  
  
app.use(express.json());  
app.use('/rules', rulesRouter);  
  
app.listen(3000, () => {  
  console.log('Server listening on port 3000');  
});
