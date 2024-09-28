const User = require('../database/models/userSchema')

async function signUpUser(req, res, next) {
    console.log('req.body..?', req?.body)
    
    const { name, email, password } = req.body;

    try {
        const userData = await User.create({ name, email, password }).catch((err) => {
            console.log('Error while creating user is :', err?.keyValue);
            if (err?.keyValue?.email) {
                res.status(400).send('This user is already exist')
            }
        })

        console.log('userData', userData)

        if (!userData) return res.status(400).send('Invalid User data')

        res.status(201).send('User Created Sucessfully...!')
        next();
    } catch (err) {
        if (err?.keyValue?.email) {
            res.status(400).send('This user is already exist')
        } else {
            res.status(500).send('Server Side Error')
        }
    }
}

module.exports = { signUpUser };
