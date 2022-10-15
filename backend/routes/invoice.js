const express = require('express');
const { createInvoice, getInvoices } = require('../controllers/invoiceController');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();

router.get('/', verifyJWT, (req, res) => getInvoices(req, res));

router.post('/', (req, res) => createInvoice(req, res));

// router.put('/', (req, res) => editInvoice(req, res));

// router.delete('/', (req, res) => deleteInvoice(req, res));

module.exports = router;
