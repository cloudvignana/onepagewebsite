const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const port = 8090;
const HOST = '0.0.0.0';

app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
  });
const server = http.createServer(app);

server.listen(port);
console.log(`Running on http://${HOST}:${port}`);