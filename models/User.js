const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    id: String,
    username: String,
    password: String,       // hashed
});

const User = mongoose.model('User', userSchema);

module.exports = User;

