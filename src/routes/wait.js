const waitRouter = require('express').Router();
const waitController = require('../controllers/waitController.js');

waitRouter.get('/all', waitController.realizarConsulta);

module.exports = waitRouter;