const express = require('express');
const fs = require('fs');
const fsp = require('fs/promises');

const server = express();

const PORT = process.env.PORT || 8080
const MongoPass = process.env.MongoPass
console.log(MongoPass);

server.listen(PORT, ()=>{console.log('server open')});

server.use(express.static('frontend'));
server.use(express.json());

server.post('/send', async (req, res)=>{
    console.log('got a request!');
    console.log(req.body);
    
});

