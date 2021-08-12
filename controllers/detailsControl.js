const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

module.exports = detailsControl = (req, res) => {

    Cube.findById(req.params.id, function (err, cube) {
        if (err) return console.error(err);
        //console.log(cube);

        Accessory.find(function(err, accessories) {
            if (err) return console.error(err);
        })
        .then(response => {

            let attachedArr = [];

            response.forEach( collectionItem => {
                if(cube.accessory.includes(collectionItem._id)){
                    attachedArr.push(collectionItem);
                } 
            });

            res.render("details", {
                cube,
                attachedArr,
            });
        });
    });		
};