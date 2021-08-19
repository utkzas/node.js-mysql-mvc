const express = require('express');
const groceryController = require('../controllers/grocery')
const router = express.Router();

router.get('/', groceryController.getAllGroceries) //we didnt call the finc, more like reference to func

module.exports = router;