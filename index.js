const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

require('dotenv').config();

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.dgawe.mongodb.net/cubeApp?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');
});

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));



