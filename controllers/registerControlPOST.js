const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = function(req, res) {

    // grab password and username out of the req.body(form)
    const body = req.body;
    const password = body.password;
    const username = body.username;
    // determine the layers of complexity to the hash
    const saltRounds = process.env.saltRounds;
    // console.log(saltRounds);
    
    //console.log(password);

    // combine genSalt + hash in this one line
    bcrypt.hash(password, saltRounds, (err, hash) => {

            // save the hashed password in the req.body ==> so hashed value shows up in browser
            body.password = hash;

            console.log('body with hashed pw ', body);
            // use the User schema to create new user with hashed pw and username, store in newUser variable
            let newUser = new User({password:hash, username});
            //const newUser = new User(body);

            // save newUser to mongobd                
            newUser.save(function (err, newUser) {
                if (err) return console.error(err);
                console.log(newUser);
            });           
    });

    res.redirect("/");
};

