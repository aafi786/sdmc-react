const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
    num: {
        type: String,
        required: true
    },
    slot: {
        type: String,
        required: true
    },
    park_stat: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Park = mongoose.model('parks', ParkSchema)