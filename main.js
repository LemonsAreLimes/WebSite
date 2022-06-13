const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const server = express();

const PORT = process.env.PORT || 8080

const Password = process.env.MongoPass;
const Username = process.env.MongoUsername;
console.log("mongo pass:" + MongoPass);

server.listen(PORT, ()=>{console.log('server open')});

server.use(express.static('frontend'));
server.use(express.json());

const url = "mongodb+srv://"+Username+":"+Password+"@sitelogging.ccoj7.mongodb.net/UserLog?retryWrites=true&w=majority";
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
    console.log(req.body.TYPE);

    if(req.body.TYPE == "TEST"){
        console.log('test');
        const data = {UMM:"ANYTHING"}
        res.json(JSON.stringify(data));
    }

    if(req.body.TYPE == 'NEWUSER'){
        console.log('New User Detected!');

        //send response so the client isnt waiting on that site for too long
        const data = {UMM:"ANYTHING"}
        res.json(JSON.stringify(data));

        //create schema
        const LogFormat = new Schema({
            LOCATION: String,
            IP: String,
            AGENT: String,
            INTERNET_PROVIDER: String,
        }, {timestamps: true});

        //turn it into a model for some reason
        const DataModel = mongoose.model('NewUsers', LogFormat);

        //fill it in with data
        const UserData = new DataModel({
            LOCATION: req.body.DATA.LOCATION,
            IP: req.body.DATA.IP,
            AGENT: req.body.DATA.AGENT,
            INTERNET_PROVIDER: req.body.DATA.INTERNET_PROVIDER,
        });

        //send it to mongo db
        UserData.save().then(
            (result)=>{
                console.log(result);
            }
        )
    }

});

