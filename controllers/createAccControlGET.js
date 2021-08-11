const mongoose = require('mongoose');
const Cube = require('../models/Cube');

module.exports = createAccControlGET = (req, res) => {
    res.render("createAccessory");
};