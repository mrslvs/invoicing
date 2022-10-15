const Invoice = require('../models/Invoice');

const createInvoice = async (req, res) => {
    const { numb, amount } = req.body;

    const newInvoice = Invoice.build({
        invoice_number: numb,
        invoice_amount: amount,
    });

    await newInvoice.save();

    res.status(201).send('Invoice created');
};

const getInvoices = async (req, res) => {
    console.log('getting invoices');
    const allInvoices = await Invoice.findAll();

    res.status(200).json(allInvoices);
    // res.send('get all invoices working');
};

module.exports = { createInvoice, getInvoices };
