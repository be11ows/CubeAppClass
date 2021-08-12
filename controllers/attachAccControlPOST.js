const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

module.exports = attachAccControlPOST = (req, res) => {

    console.log(req);

    // retrieve value of the selection menu (chosen accessory)
    const selectedAccessory = req.body.accessory;

    // retrieve current cube's id from the "/:id" parameter in the url path
    const cubeId = req.params.id;

   //find current cube by id
   Cube.findById(cubeId, function (err, cube) {

    if (err) return console.error(err);

    // get collection of existing accessories
    Accessory.find(function (err, accessories) {

        // filter out the accessory doc associated with the chosen option
        let attachThisAcc = accessories.filter(accessory => accessory.name == selectedAccessory)[0];

        if(!cube.accessory.includes(attachThisAcc._id)) {

            cube.accessory.push(attachThisAcc);

            cube.save( function (err) {

                if (err) return console.error(err);

                res.redirect(`/details/${cubeId}`);
            });

        } else {
            console.log('Accessory already attached to his Cube!');
            res.redirect(`/details/${cubeId}`);
        }
    });
    });
};