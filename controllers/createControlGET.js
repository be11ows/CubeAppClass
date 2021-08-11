const mongoose = require('mongoose');
const Cube = require('../models/Cube');

module.exports = createControlGET = (req, res) => {
    res.render("create");
};