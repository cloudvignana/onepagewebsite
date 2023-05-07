const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const HOST = '0.0.0.0';

app.use(express.json());
app.use(express.static("express"));

// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter = RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});

// apply rate limiter to all requests
app.use(limiter);

// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
  });
const server = http.createServer(app);

server.listen(port);
console.log(`Running on http://${HOST}:${port}`);