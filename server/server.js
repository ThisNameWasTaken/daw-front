const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

const port = 3001;
const jwtSecret = 'MySuperDuperSecret';

app.use(cors());
app.use(bodyParser.json());

app.get('/api/login', (req, res) => {
  const token = jwt.sign({ id: 'e2H4aD3j1', username: 'John Doe' }, jwtSecret, {
    expiresIn: 60 * 60,
  }); // Expires in 1 hour

  res.json({ token: token });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
