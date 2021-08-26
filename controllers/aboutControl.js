const mongoose = require('mongoose');
const Cube = require('../models/Cube');

module.exports = (req, res) => {
    // use the response to render the about page
    res.render("about");
};