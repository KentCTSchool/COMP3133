const express = require('express');
const app = express();


//Converting all request to json
app.use(express.json());

//Getting the root
app.get('/', (req, res) => {
    res.send({'Hello': 'there'});
});

module.exports = app