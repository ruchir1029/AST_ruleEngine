Rule Engine with AST
A simple rule engine application that uses Abstract Syntax Trees (ASTs) to evaluate rules and determine user eligibility.

Table of Contents
Getting Started
API Endpoints
Test Cases
SQL Queries

To get started with the project, follow these steps:

Clone the repository: git clone https://github.com/ruchir1029/AST_ruleEngine
Install the dependencies: npm install
Start the server: node app.js
API Endpoints
The following API endpoints are available:

GET /rules
Returns a list of all rules in the database.

POST /rules
Creates a new rule in the database.

GET /rules/:id
Returns a specific rule by its ID.

PUT /rules/:id
Updates a specific rule by its ID.

DELETE /rules/:id
Deletes a specific rule by its ID.

POST /evaluate
Evaluates a rule against user data.

POST /ast
Generates an AST for a given rule string.

POST /combine
Combines multiple rule strings into a single AST.

Test Cases
The following test cases are included:

GET /rules
Expected response: [{"id": 1, "rule_string": "age > 30 AND department = 'Sales'"}, {"id": 2, "rule_string": "salary > 50000 OR experience > 5"}]
POST /rules
Request body: {"rule_string": "age > 30 AND department = 'Marketing'}"
Expected response: {"id": 3, "rule_string": "age > 30 AND department = 'Marketing'}"
GET /rules/:id
Request URL: GET /rules/1
Expected response: {"id": 1, "rule_string": "age > 30 AND department = 'Sales'}"
PUT /rules/:id
Request URL: PUT /rules/1
Request body: {"rule_string": "age > 30 AND department = 'Marketing'}"
Expected response: {"id": 1, "rule_string": "age > 30 AND department = 'Marketing'}"
DELETE /rules/:id
Request URL: DELETE /rules/1
Expected response: {"message": "Rule deleted successfully"}
POST /evaluate
Request body: {"age": 35, "department": "Sales", "salary": 60000}
Expected response: {"result": true}
POST /ast
Request body: {"rule_string": "age > 30 AND department = 'Sales'}"
Expected response: {"ast": {"type": "AND", "left": {"type": "GT", "left": {"type": "IDENTIFIER", "value": "age"}, "right": {"type": "LITERAL", "value": 30}}, "right": {"type": "EQ", "left": {"type": "IDENTIFIER", "value": "department"}, "right": {"type": "LITERAL", "value": "Sales"}}}}
POST /combine
Request body: [{"rule_string": "age > 30 AND department = 'Sales'}", {"rule_string": "salary > 50000 OR experience > 5"}]
Expected response: {"ast": {"type": "AND", "left": {"type": "GT", "left": {"type": "IDENTIFIER", "value": "age"}, "right": {"type": "LITERAL", "value": 30}}, "right": {"type": "OR", "left": {"type": "GT", "left": {"type": "IDENTIFIER", "value": "salary"}, "right": {"type": "LITERAL", "value": 50000}}, "right": {"type": "GT", "left": {"type": "IDENTIFIER", "value": "experience"}, "right": {"type": "LITERAL", "value": 5}}}}}

SQL Quaries

CREATE TABLE rules (  
  id SERIAL PRIMARY KEY,  
  rule_string VARCHAR(255),  
  ast JSONB  
);  
  
CREATE TABLE nodes (  
  id SERIAL PRIMARY KEY,  
  type VARCHAR(50),  
  left_node INTEGER,  
  right_node INTEGER,  
  value VARCHAR(255)  
);



