const express = require('express');
const usersModel = require('../models/Users');
const app = express();


//Converting all request to json
app.use(express.json());

//create Users
app.post('/users', async (req, res) => {
    const users = new usersModel(req.body);
    try {
      await users.save();
      res.status(200).send('Created');
      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = app