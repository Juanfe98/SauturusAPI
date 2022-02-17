const express = require('express');
const router = express.Router();

const { contact } = require('../controllers')

//Route creation for email sendings
router.get('/sendEmail', contact.contactUs);

module.exports = router;
