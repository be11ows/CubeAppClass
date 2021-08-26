const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

module.exports = attachAccControlGET = (req, res) => {

    // look in the Accessory collection
    Accessory.find(function(err, accessories) {
        //console.log('accessories ===> ', accessories);
        if (err) return console.error(err);

        // now find a specific cube with the cubes id
        Cube.findById(req.params.id)
        // console.log('req.params.id =', req.params.id);
        // console.log('req.params =', req.params);

        // use the populate method to 'populate' the cube with the accessories, who's id's are stored in an array
        .populate('accessory')
        .exec(function (err, cube) {
            if (err) return console.error(err);

            // get a true/false about whether the attached accessories are all the possible accessories to attach
            let manageAttached = cube.accessory.length == accessories.length ? true : false;
            //console.log('managedAttached ==> ', manageAttached);

            
            res.render('attachAccessory', {
                cube,
                accessories,
                manageAttached
            });
        });
    });		
};





        // Cube.findById(req.params.id, function (err, cube) {
        //     if (err) return console.error(err);
        //     //console.log(cube);

        //     Accessory.find(function(err, accessories) {
        //         if (err) return console.error(err);
        //     })
        //     .then(response => {

        //         let attachedAcc;

        //         if(response.length == cube.accessory.length) {
        //             attachedAcc = true;
        //         } else {
        //             attachedAcc = false;
        //         }

        //         res.render("attachAccessory", {
        //             cube,
        //             response,
        //             attachedAcc
        //         });
        //     });
        // });		