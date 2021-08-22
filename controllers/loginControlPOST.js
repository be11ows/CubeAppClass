const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

module.exports = loginControlPOST = async (req, res) => {
 
    // AWAIT finding a User in mongoDB by username ==> store in loggedInUser variable
    let loggedInUser = await User.findOne({username: req.body.username});
    console.log('user to log in is ===> ', loggedInUser);

    // isolating the userId, username & hashedPW through the loggedInUser object
    const userId = loggedInUser._id;
    const username = loggedInUser.username;
    const hashedPW = loggedInUser.password;
    console.log('hashed PW is ', hashedPW);
    console.log('pw is  ', req.body.password);

    // using bcrypt.compare to compare 'actual' pw and the hashed pw....THEN, passing in a func with the repsonse (which is equal to t/f)
    // ??? explanation for .then(response)  ==> seen in the docs, just don't fully grasp
    bcrypt.compare(req.body.password, hashedPW).then( function (response) {

        // if response is equal to true, aka if password and hashes ish are the same
        if (response == true) {
            console.log('We in!');

            // if they are the same then we need to do some things to create a jwt
            // isolating the the payload ( an obj ) + our secret in the .env file + the option ( obj ) to determine an exp
            const payload = { userId, username };
            const secret = process.env.secret;
            const options = { expiresIn: '1h' };

            // passing those 3 things in to generate the signature of the jwt and storing it in a var 'token'
            const token = jwt.sign(payload, secret, options);
            //console.log(token);

            // setting our tokens to kick things off.  FIRST, jwt as key and actual signed jwt as value
            res.cookie('jwt', token, { httpOnly: true, maxAge: 10000 * 10000 });
            // followed buy loggedIn (key) with value of true
            res.cookie('loggedIn', true);

            // res.send( { user, token });    ?????????????????????

            const decodedToken = jwt.verify(token, secret);

            // console.log('DECODED =====> ', decodedToken);
            res.redirect("/");

        } else {

            console.log('PASSWORD DOES NOT MATCH!');
            res.redirect('/login');
        }
    });
};