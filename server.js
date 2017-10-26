const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'dist')));

const port = process.env.PORT ||'3100';
app.set('port',port);

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const server = http.createServer(app);


require("./server/services/property.service.server.js")(app);
app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'dist/index.html'));
});


server.listen(port, ()=> console.log("Running"));