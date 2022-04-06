var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.static(__dirname));
app.use(express.static('public'));

const chatRouter = require('./routes/ChatRoutes');

var http = require('http').Server(app);
// var dbUrl = 'mongodb+srv://kpeds25:Magaaralak0@kentpedrocha.yqgrn.mongodb.net/db_f2021_fullstack?retryWrites=true&w=majority'

// mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
//     if (err) {
//         console.log('mongodb connected',err);
//     }else{
//         console.log('Successfully mongodb connected');
//     }
// })


app.use(chatRouter);

var server = http.listen(5000, () => {
  console.log('server is running on port', server.address().port);
});