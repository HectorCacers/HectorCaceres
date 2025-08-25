var express = require('express');
var router = express.Router();

var holaRouter = require('./hola');      
var heladosRouter = require('./helados'); 


router.get('/', function(req, res, next) {
  res.send('Bienvenido a la API principal 🚀');
});


//router.use('/hola', holaRouter);       
router.use('/helados', heladosRouter);  

module.exports = router;
