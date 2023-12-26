const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    user : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    registered: {
        type: Date,
        required: true
    }
})

const Event = mongoose.model('event', eventSchema);

module.exports = Event;
