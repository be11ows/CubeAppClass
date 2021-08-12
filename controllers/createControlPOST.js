const mongoose = require('mongoose');
const Cube = require('../models/Cube');

module.exports = createControlPOST = (req, res) => {
    // console.log(req.body);
    const newCube = new Cube(req.body);
    newCube.save(function (err, newCube) {
        if (err) return console.error(err);
      });
    res.redirect('/');
};