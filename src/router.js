const express = require('express');
const router = express.Router();
const { signUpUser } = require('./controllers')

// ------------------------------------

router.post('/api/sign-up', signUpUser)

// ------------------------------------

module.exports = router;