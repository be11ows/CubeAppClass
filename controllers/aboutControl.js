const mongoose = require('mongoose');
const Cube = require('../models/Cube');

module.exports = aboutControl = (req, res) => {
    res.render("about");
};