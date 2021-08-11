const mongoose = require('mongoose');
const Cube = require('../models/Cube');

module.exports = createAccControlPOST = (req, res) => {
    // console.log(req.body);
    const newAccessory = new Accessory(req.body);
    newAccessory.save(function (err, newAccessory) {
        if (err) return console.error(err);
    });
    res.redirect('/create/accessory');
};