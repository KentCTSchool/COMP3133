var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
const userModel = require('./models/user.js');
const group_messageModel = require('./models/group_message.js');
const private_messageMoDel = require('./models/private_message.js');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'));

var dbUrl = 'mongodb+srv://kpeds25:Magaaralak0@kentpedrocha.yqgrn.mongodb.net/db_f2021_fullstack?retryWrites=true&w=majority'

app.get('/login', (req, res) => {
  const user = userModel.findOne({username: req.params.username});
  try {
    res.send(user);
    if(user.count == 0){
      res.send("No Account found")
    }
    else{
      res.sendFile(path.resolve(__dirname + "/../views/home.html"))
    }
    // res.status(200).send("OK");
  } catch (err) {
    res.status(500).send(err);
  }
})

app.get('/group_message', (req, res) => {
  group_messageModel.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.get('/private_message', (req, res) => {
  private_messageMoDel.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.post('/account_created', async (req, res) => {
  let user = new userModel(req.body);
  user.save((err) =>{ 
    if(err)
    {
      //sendStatus(500);
      console.log(err)
    }
    res.sendStatus(200);
  })
});

app.post('/group_message', (req, res) => {
  var group_message = new group_messageModel(req.body);
  group_message.save((err) =>{ 
    if(err)
    {
      //sendStatus(500);
      console.log(err)
    }
    //Send Message to all users
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

app.post('/private_message', (req, res) => {
  var private_message = new private_messageMoDel(req.body);
  private_message.save((err) =>{ 
    if(err)
    {
      //sendStatus(500);
      console.log(err)
    }
    //Send Message to all users
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})




io.on('connection', (socket) => {
  console.log(`A NEW user is connected: ${socket.id}`)
  //console.log(socket.rooms);
  //socket.join("room1")
  //console.log(socket.rooms);
})

mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('mongodb connected',err);
    }else{
        console.log('Successfully mongodb connected');
    }
})


var server = http.listen(9090, () => {
  console.log('server is running on port', server.address().port);
});