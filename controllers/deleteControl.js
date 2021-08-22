const mongoose = require('mongoose');
const Cube = require('../models/Cube');

module.exports = deleteControl = (req, res) => {
    
    Cube.findById(req.params.id, function (err, cube) {
        if (err) return console.error(err);
        res.render("deleteCubePage", {cube});
    });
};