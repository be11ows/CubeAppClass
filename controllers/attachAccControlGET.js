const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

module.exports = attachAccControlGET = (req, res) => {
    // let path = url.parse(req.url).pathname;
    // currentID = path.split('/')[3];
    // currentCube = cubes.filter(cube => cube._id == currentID);

        Cube.findById(req.params.id, function (err, cube) {
            if (err) return console.error(err);
            //console.log(cube);

            Accessory.find(function(err, accessories) {
                if (err) return console.error(err);
            })
            .then(response => {
                res.render("attachAccessory", {
                    cube,
                    response,
                });
            });
        });				
};