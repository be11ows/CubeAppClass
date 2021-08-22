const mongoose = require('mongoose');
const Cube = require('../models/Cube');

module.exports = loginControl = (req, res) => {
    res.render("loginPage");
};