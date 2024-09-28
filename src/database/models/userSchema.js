const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Sets default to the current date and time
    },
})

const User = mongoose.model('user', userSchema);

module.exports = User