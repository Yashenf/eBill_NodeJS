const express = require('express');
const customerController = require('../controller/CustomerController');
const router = express.Router();
router.post('/save',customerController.saveCustomer);
module.exports=router;