const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET_KEY;

// ------------------------------------------------

const signInUser = (user) => {
    if (!user) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
    return token;
};

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                reject('Invalid token');
            } else {
                resolve(user);
            }
        });
    });
};

// ----------------------------------------------------

module.exports = { signInUser, verifyToken };
