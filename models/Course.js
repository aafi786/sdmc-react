const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    lesson_total: {
        type: Number,
        required: true
    },
    lesson_list: {
        type: Array,
        required: true
    },
    lesson_test: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Course = mongoose.model('coruses', CourseSchema)