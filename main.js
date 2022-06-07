const express = require('express');
const fs = require('fs');
const fsp = require('fs/promises');

const server = express();

server.listen(3000, ()=>{console.log('server open')});

server.use(express.static('../frontend'));
server.use(express.json());

//test

server.post('/send', async (req, res)=>{
    console.log('got a request!');
    console.log(req.body)
})