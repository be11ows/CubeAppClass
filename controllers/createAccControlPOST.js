const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

module.exports = createAccControlPOST = (req, res) => {
    // console.log(req.body);

    // using the inputs from the form field to create a new Accessory and store it in a variable called newAccessory
    const newAccessory = new Accessory(req.body);

    // saving the newly created accessory to mondgo db
    newAccessory.save(function (err, newAccessory) {
        if (err) return console.error(err);
    });
    // then, redirecting back to the create accessory page
    res.redirect('/create/accessory');
};