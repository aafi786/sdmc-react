const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    completed_by: {
        type: String,
        required: true
    }
})

module.exports = Video = mongoose.model('videos', VideoSchema)