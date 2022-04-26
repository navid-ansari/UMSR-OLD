const express = require("express");

const controllerConfig = async () => {

// api routes
const testController = require('../routes/test/test');
const userlistController = require('../routes/userlist/userlistController');
const menuController = require('../routes/menu/menu');
const signupController = require('../routes/signup/signupController');
const signinController = require('../routes/signin/signinController');
const viewController = require('../routes/view/viewController');
const deleteController = require('../routes/delete/deleteController');
const editController = require('../routes/edit/edit');

// use routes
app.use('/api/test', testController);
app.use('/api/userlist', userlistController);
app.use('/api/menu', menuController);
app.use('/api/signup', signupController);
app.use('/api/signin', signinController);
app.use('/api/view', viewController);
app.use('/api/delete', deleteController);
app.use('/api/edit', editController);
};

module.exports = controllerConfig;
