const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const config = require('./config/config')[env];
const app = require('express')();
const cookieParser = require('cookie-parser');
  app.use(cookieParser());

const jwt = require('jsonwebtoken');
  const payloads = { _id, username };
  const options = { expiresIn: '2d'};
  const secret = 'dummyDataDood';
  const token = jwt.sign(payload, secret, options);  // <-- token as hashed

const bcrypt = require('bcrypt');
  const saltRounds = 8;
  const myPlainTextPassword = 'dummyDataDood';

bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(myPlainTextPassword, slat, (err, hash) => {
    // console.log(hash);
  });
});

require('./config/express')(app);
require('./config/routes')(app);

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.dgawe.mongodb.net/cubeApp?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');
});

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));



