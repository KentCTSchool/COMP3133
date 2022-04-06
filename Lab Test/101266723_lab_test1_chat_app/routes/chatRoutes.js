const app = require('express')()
const http = require('http').createServer(app)
const cors = require('cors')
const PORT = 3000

//Create Server Side Socket
const io = require('socket.io')(http)
var path = require('path');
const userModel = require('../models/user');
// const req = require('express/lib/request')
// const res = require('express/lib/response')
// const { Socket } = require('socket.io')
// const PORT = 3000


app.use(cors())
//Default Express GET
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../index.html"))
})
//Read ALL
app.get('/views/sign_up.html', async (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../views/sign_up.html"))
    // console.log("aaa")
});

app.post('/account_created', async (req, res) => {
  let user = new userModel(req.body);
  user.save((err) =>{ 
    if(err)
    {
      //sendStatus(500);
      console.log(err)
    }

    //Send Message to all users
    io.emit('message', req.body);
    res.sendStatus(200);
  })
});

app.get('/views/home.html', async (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../views/home.html"))
});

app.get('/views/chat.html', async (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../views/chat.html"))
});



io.on('connection', (socket) => {
    console.log("connection has been created!")
    // console.log(socket.id)
    io.sockets.emit('welcome', `Maligayang pagpasok sa chat. You are using the id of ${socket.id}`)

    socket.on('disconnect', () =>{
        console.log(`${socket.id} disconnected`)
    })

    socket.on('message', (data)=>{
        // console.log(data)
        //will only send to current client
        // socket.emit('newMessage', data)
        //Gloval all client
        const msg = {
            sender: socket.id,
            message: data
        }
        //including the client
        // io.sockets.emit('newMessage', msg)
        //all but not the client
        socket.broadcast.emit('newMessage', msg)
    })

    socket.on('joinroom', (roomName) => {
        socket.join(roomName)
        const msg = {
            sender: socket.id,
            message: "Joined the room successfully!"
        }
        io.sockets.emit('newMessage', msg)
    })

    socket.on('roomMessage', (data) => {
        console.log(data)
        const msg = {
            sender: socket.id,
            message: data.message
        }
        // 1 - 1 message
        // socket.broadcast.to(socket.id).emit('message', msg)
        // io.to(socket.id).emit('message', msg)

        //to all user inside the room
        socket.broadcast.to(data.room).emit('newMessage', msg)
    })
});
module.exports = app