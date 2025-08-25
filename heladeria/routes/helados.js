var express = require('express');
var router = express.Router();
var heladosCtrl = require('../controllers/helados');

router.get('/main', heladosCtrl.getMain);

module.exports = router;  
