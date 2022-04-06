const app = require('express')()
const http = require('http').createServer(app)
const cors = require('cors')
const PORT = 3000

//Create Server Side Socket
const io = require('socket.io')(http)

app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Socket Programming</h1>')
})

app.get('/index.html', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

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
})

http.listen(PORT, () => {
    console.log(`SERVER running at port ${PORT}`)
})