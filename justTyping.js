// aboutControl

// const Accessory = require("./models/Accessory");
// const Cube = require("./models/Cube");

// module.exports = (req, res) => {
//     res.render('about');
// };

// attachAccessoryControlGET

// module.exports = (req, res) => {
//     // start by getting all acessories in the Accessory collection
//     Accessory.find(function (err, accessories) {
//         if (err) console.error(err);

//         // now look for the specific Cube, the one with the id in the address
//         Cube.findById(req.params.id).
//         // populate the cube accessories by the id(s) in the accessory key for the Cube, which is an array
//         populate('accessory').
//         exec(function (err, cube) {
//             if (err) return console.error(err);

//             // find a way to determine whether Cube has ALL accessories attached to it or not
//             let manageAttached = cube.Accessory.length == accessories.length ? true : false;

//             // take all this info of cube, acc, and manageAttached, render hbs 'attachAccessory'
//             res.render('attachAccessory', {
//                 cube,
//                 accessories,
//                 manageAttached
//             });
//         }); 
//     });
// };

/*
try {
		console.log(req.body);
		const { username, password } = req.body;
		const user = await User.findByCredentials(username, password);
		const token = await user.generateAuthToken();

		// set token as a cookie
		res.cookie("token", token, { httpOnly: true, maxAge: 10000 * 10000 });
		res.cookie("loggedIn", true);

		//res.send({ user, token });
		res.redirect("/");

        ======================

        res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })
        res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })

        ======================

        http://expressjs.com/en/5x/api.html#res.cookie



		To check a password:

// Load hash from your password DB.
bcrypt.compare("B4c0/\/", hash, function(err, res) {
    // res === true
});
bcrypt.compare("not_bacon", hash, function(err, res) {
    // res === false
});
 
// As of bcryptjs 2.4.0, compare returns a promise if callback is omitted:
bcrypt.compare("B4c0/\/", hash).then((res) => {
    // res === true
});

-----------

var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

----------------------------
AUTH CONTROLLER

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async(req, res, next) => {
  console.log(req.cookies)
    const token = req.cookies.token;
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log('the data is ', data)
    try {
        const user = await User.findOne({ _id: data._id })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth

-------------------

router.post('/login', loginValidator(), authCtrl.login);


-------------------

exports.isAuth = (req, res, next)=>{ console.log(“This is middleware!); next() }

-------------------

catch (error) {
		console.log("It didn't work! ");
		res.render("login", {
			errors: "Login failed! Check authentication credentials",
		});
	}

-------------------
res.cookie("loggedIn", true);
-------------------
// set token as a cookie
		res.cookie("token", token, { httpOnly: true, maxAge: 10000 * 10000 });
-------------------
const auth = async (req, res, next) => {
    // Check if token is valid
    console.log("Hello middleware is working");
};

module.exports = {auth};
-------------------
-------------------

*/