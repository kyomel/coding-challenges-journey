const express = require('express');
const app = express();
app.use(express.json());

app.post('/find-missing-number', async (req, res) => {
  const missingNumber = findMissingNumber(req.body.array);
  res.json({missingNumber});
});

app.listen(3000, () => console.log('Server started on port 3000'));