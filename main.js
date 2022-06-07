const express = require('express');
const fs = require('fs');
const fsp = require('fs/promises');

const server = express();

server.listen(3000, ()=>{console.log('server open')});

server.use(express.static('../frontend'));
server.use(express.json());

server.post('/send', async (req, res)=>{
    console.log('got a request!');

    LogUser();
});

async function LogUser(){

    const DB = await fsp.readFile('USERLOG.json');
    const ParsedDB = JSON.parse(DB);

    const NewData = 'New user!'

    ParsedDB.push(NewData);

    const NewDB = JSON.stringify(ParsedDB);
    fs.writeFile('USERLOG.json', NewDB, (err)=>{
        if(err){console.log('error')}
        else {console.log('new user written')}
    });
}