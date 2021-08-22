const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Cube = require('../models/Cube');
const User = require('../models/User');

module.exports = createControlPOST = (req, res) => {
    // console.log(req.body);

    const loggedIn = req.cookies.loggedIn;

    const token = req.cookies.token;

    const userInfo = jwt.verify(token, process.env.secret);

    const UserID = userInfo.userID;

    console.log('USER INFO ====>  ', userInfo);
    console.log('USER ID ====>  ', userInfo.userId);

    User.findById(UserID, function(err, user) {
      if (err) return console.error(err);

      req.body.creatorId = UserID;

      // create new cube based on form inputs (ie req.body) and save it in variable newCube
      const newCube = new Cube(req.body);
  
      // save newCube to mongo db
      newCube.save(function (err, newCube) {

          if (err) return console.error(err);

        });
      
    });

    // redirect the response to the index ('/') page
    res.redirect('/create');

};