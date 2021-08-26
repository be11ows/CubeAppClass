const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cubeSchema = new schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessory: [{type: mongoose.Schema.Types.ObjectId, ref: 'Accessory'}],
    creatorId: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}],

});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
