#!/usr/bin/env node

'use strict';
const http 	  = require('http');
const express = require('express');
const serve   = require('..');

const app = express();

app.use(serve(process.cwd(), { 
  index: true
}));

const server = http.createServer(app);
server.listen(process.env.PORT || 8000, function(){
  console.log('server is running at %j', server.address().port);
});