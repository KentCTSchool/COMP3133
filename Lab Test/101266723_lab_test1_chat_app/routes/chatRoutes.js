const app = require('express')()
const http = require('http').createServer(app)
const cors = require('cors')
var path = require('path');
const userModel = require('../models/user');
// const req = require('express/lib/request')
// const res = require('express/lib/response')
const { Socket } = require('socket.io')
const PORT = 3000

//Create Server Side socket
const io = require('socket.io')(http)

app.use(cors())
//Default Express GET
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../index.html"))
})
//Read ALL
app.get('/views/sign_up.html', async (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../views/sign_up.html"))
});
app.post('/account_created', async (req, res) => {
    const user = {        
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    } 
    const newUser =  new userModel(user)
    console.log(user)
    try {
      await newUser.save();
      res.status(201).send('Created');
    } catch (err) {
      res.status(500).send(err);
    }

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
            sender: data.username,
            message: data.message
        }
        socket.broadcast.to(data.room).emit('newMessage', msg)
    })
})



module.exports = app