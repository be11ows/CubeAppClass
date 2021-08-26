const jwt = require('jsonwebtoken');

module.exports = jwtAuth = (req, res, next) => {
    try {
        console.log(req);

        const token = req.cookies.token;
        
        const userInfo = jwt.verify(token, process.env.secret);

        req.user = userInfo;

        next();

    } catch (err) {

        console.log('error', err);
    }
};