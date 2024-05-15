// Question: Optimize SQL Queries(Sharpen Your SQL Skills by Optimizing Complex Queries)
// Requirements:
// Function Design: Implement a function filter_records(data, criteria) that filters records based on provided criteria.
// Data Structure Efficiency: Optimize how data is accessed and manipulated to minimize processing time.
// Result Accuracy: Ensure the function correctly applies all criteria to filter data, akin to a SQL WHERE clause.
// Function Implementation: The filter_records function optimizes data access by building indices similar to database indexing. This method reduces the need to iterate over all elements repeatedly, thus enhancing performance. Check file answer.py
// Web Application Development with Node.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/filter', (req, res) => {
    const data = req.body.data;
    const criteria = req.body.criteria;
    const result = filter_records(data, criteria);
    res.json(result);
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
