const mongoose = requeire('mongoose')
const authentication = require('./API/authentication')
const app=require('express')();




authentication(app, mongoose);








module.exports=app;