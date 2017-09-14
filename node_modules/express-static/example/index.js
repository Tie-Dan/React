const http 	  = require('http');
const express = require('express')
const serve   = require('..');

const app = express();

app.use(serve(__dirname, {
  index: true
}));

http.createServer(app).listen(3000);
