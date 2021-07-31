// Require Controllers
const express = require('express');
const bodyParser = require('body-parser');

module.exports = (app) => {
	app.get("/", (req, res) => {
		res.render("index");
	});
	app.get("/about", (req, res) => {
		res.render("about");
	});
	app.get("/create", (req, res) => {
		res.render("create");
	});
	app.get("/details/:id", (req, res) => {
		res.send("detail!");
	});
};