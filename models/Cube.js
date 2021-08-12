const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cubeSchema = new schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accessory: [{type: mongoose.Schema.Types.ObjectId, ref: 'attatched'}],
    creatorId: [{type: String, required: true}],
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;


/* MARISSAS VERSION  ==> 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cubeSchema = require('./Cube');

const accessorySchema = Schema({
    name: String,
    description: String,
    imageUrl: String,
    cubes: Number,
    accessories: [{ type: Schema.Types.ObjectId, ref: 'Cube'}],
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;
*/