const mongoose = require('mongoose');
const Cube = require('../models/Cube');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

module.exports = registerControl = (req, res) => {
    res.render("registerPage");
};