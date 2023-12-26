const Event = require('../models/eventModel.js');

class eventController {

  static async createEvent(req, res) {
    try{    
        console.log(req.body);
        const newEvent = new Event({ ...req.body });
        const eventInserted = await newEvent.save();
        return res.status(201).json(eventInserted);
    }
    catch(err){
        return res.status(500).json(err);
    }

  }

  static async getAllEvents(req, res) {
    try {
      const allEvents = await Event.find();
      return res.status(200).json(allEvents);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los eventos' });
    }
  }

}

module.exports = eventController