import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = {
  "user1@example.com": {
    password: "password1"
  },
  "user2@example.com": {
    password: "password2"
  }
};

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.post('/signup', (req, res) => {

  res.send('Signup endpoint');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (users[email] && users[email].password === password) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});