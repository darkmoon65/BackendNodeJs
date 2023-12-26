const eventRouter = require('express').Router();
const eventController = require('../controllers/eventController.js');

eventRouter.post('/create', eventController.createEvent);
eventRouter.get('/all', eventController.getAllEvents);

module.exports = eventRouter;