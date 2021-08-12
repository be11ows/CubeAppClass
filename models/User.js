const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name: String,
    description: String,
    imageUrl: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

