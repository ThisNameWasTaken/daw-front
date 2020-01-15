const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

const port = 3001;
const jwtSecret = 'MySuperDuperSecret';

app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  let id;

  switch (username) {
    case 'Jane':
      id = 'H46tFd5';
      break;
    case 'John':
      id = 'e2H4aD3j1';
      break;
    default:
      res.status(401).json({ error: 'User is not registered' });
  }

  const token = jwt.sign({ id, username }, jwtSecret, {
    expiresIn: 60 * 60,
  }); // Expires in 1 hour

  res.json({ token: token });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
