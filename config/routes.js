// Require Controllers
const express = require('express');
const bodyParser = require('body-parser');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const url = require('url');
const jwt = require('jsonwebtoken');

const indexControl = require('../controllers/indexControl');
const aboutControl = require('../controllers/aboutControl');
const createControlGET = require('../controllers/createControlGET');
const detailsControl = require('../controllers/detailsControl');
const createAccControlGET = require('../controllers/createAccControlGET');
const attachAccControlGET = require('../controllers/attachAccControlGET');
const loginControl = require('../controllers/loginControl');
const registerControl = require('../controllers/registerControl');
const editControl = require('../controllers/editControl');
const deleteControl = require('../controllers/deleteControl');

const createControlPOST = require('../controllers/createControlPOST');
const createAccControlPOST = require('../controllers/createAccControlPOST');
const attachAccControlPOST = require('../controllers/attachAccControlPOST');
const registerControlPOST = require('../controllers/registerControlPOST');
const loginControlPOST = require('../controllers/loginControlPOST');

const four04Control = require('../controllers/four04Control');

const jwtAuth = require('../middleware/jwtAuth');

module.exports = (app) => {

	app.get("/", indexControl);
	app.get("/about", aboutControl);
	app.get("/create", createControlGET);
	app.get("/details/:id", detailsControl);
	app.get("/create/accessory", createAccControlGET);
	app.get("/attach/accessory/:id", attachAccControlGET);
	app.get('/login', loginControl);	
	app.get('/register', registerControl);	
	app.get('/edit/:id', editControl);	
	app.get('/delete/:id', deleteControl);
	
	app.post('/create', createControlPOST);	
	app.post('/create/accessory', createAccControlPOST);	
	app.post('/attach/accessory/:id', attachAccControlPOST);	
	app.post('/register', registerControlPOST);	
	app.post('/login', loginControlPOST);

	app.get("/*", four04Control);

};