const express = require('express');
const mongoose = require('mongoose');
const chatRoutes = require('./routes/chatRoutes.js');

const app = express();
app.use(express.static('public'));
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://kpeds25:Magaaralak0@kentpedrocha.yqgrn.mongodb.net/db_f2021_fullstack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log(`MongoDB connected ${success}`)
}).catch(err => {
  console.log(`Error while MongoDB connection ${err}`)
});

app.use(chatRoutes);



app.listen(9090, () => { console.log('Server is running...') });