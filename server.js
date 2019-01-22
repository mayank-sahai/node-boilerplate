"use strict"

/************************ Require Node modules **********************/
const express = require('express'),
bodyParser = require('body-parser'),
config = require('config');

/************************ Require Local modules **********************/
const routers = require('./routes');

/************************ Varaiable Listing **********************/
const app = express(),
router = express.Router(),
port = config.get('General').port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', router);
routers(router);

app.listen(port , (error, result) => {
  if (error) 
    console.log("Error while Application startup", error);
  else 
    console.log("Applcation connected at port:", port);
});

