const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const server = express();

const PORT = process.env.PORT || 8080

const MongoPass = process.env.MongoPass
console.log("mongo pass:" + MongoPass);

server.listen(PORT, ()=>{console.log('server open')});

server.use(express.static('frontend'));
server.use(express.json());

const url = "mongodb+srv://lemons:"+MongoPass+"@atlascluster.ccoj7.mongodb.net/testing-mongo?retryWrites=true&w=majority";
const op = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }

console.log('connecting to mongo DB...');
mongoose.connect(url, op).then(
    (res) =>{
        console.log('connected');
    }
).catch(
    (err)=>{
        console.log(err)
    }
);

server.post('/send', async (req, res)=>{
    console.log('got a request!');
    console.log(req.body);

    if(req.body.TYPE == 'NEWUSER'){
        console.log('test');
        console.log(req.body);
    }

});

