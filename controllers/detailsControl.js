const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const { response } = require('express');

module.exports = detailsControl = (req, res) => {

    Cube.findById(req.params.id)
    .populate('accessory')
    .exec(function (err, cube) {
        if (err) return console.error(err);

        if(req.cookies.loggedIn) {
            
            const token = req.cookies.token;
            const userInfo = jwt.verify(token, process.env.secret);
            const userID = userInfo.userId;

            let authorized = (cube.createrId == UserID) ? true : false;

            res.render("details", {
                cube, 
                loggedIn: true,
                authorized,
            });

        } else {
            
            res.render("details", {
                cube, 
                loggedIn: false,
                authorized: false,
                
            });
        }
    });
};









// Cube.findById(req.params.id, function (err, cube) {
//     if (err) return console.error(err);
//     //console.log(cube);

//     Accessory.find(function(err, accessories) {
//         if (err) return console.error(err);
//     })
//     .then(response => {

//         let attachedArr = [];

//         response.forEach( collectionItem => {
//             if(cube.accessory.includes(collectionItem._id)){
//                 attachedArr.push(collectionItem);
//             } 
//         });

//         res.render("details", {
//             cube,
//             attachedArr,
//         });
//     });
// });		