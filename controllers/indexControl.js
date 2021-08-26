const mongoose = require('mongoose');
const Cube = require('../models/Cube');

module.exports = function (req, res) {

    const token = req.cookies.jwt;
    const loggedIn = req.cookies.loggedIn;
    // console.log('token is ', token);
    // console.log('logged in is ', loggedIn);

    Cube.find(function (err, cubes) {
        if (err) return console.error(err);
        res.render("index", {cubes, loggedIn});
    });
};

