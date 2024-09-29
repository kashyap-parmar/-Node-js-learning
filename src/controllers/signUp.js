const User = require('../database/models/userSchema');
const { sendResponse, signInUser } = require('../services');

// ---------------------------------------------------------

async function signUpUser(req, res) {
    const { name, email, password } = req.body;
    try {
        if (name && email && password) {
            const userData = await User.create({ name, email, password })
            if (!userData) return res.status(500).send(sendResponse({ error: true, message: 'Server Side Error' }));
           
            res.status(201).send(sendResponse({ data: { token: signInUser(userData?.toObject()) }, message: 'User Created Sucessfully...!' }))
        } else {
            res.status(400).send(sendResponse({ error: true, message: 'Unsufficient user data' }))
        }
    } catch (err) {
        if (err?.keyValue?.email) {
            res.status(400).send(sendResponse({ error: true, message: 'This user is already exist' }))
        } else {
            res.status(500).send(sendResponse({ error: true, message: 'Server Side Error' }))
        }
    }
}

module.exports = { signUpUser };
