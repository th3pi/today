const mongoose = require('mongoose')

const tasksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        index: true,
    },
    description: {
        type: String,
        required: false,
        unique: false,
        index: true,
    },
    status: {
        type: String,
        required: true,
        unique: false,
        index: true,
    },
    dueBy: {
        type: String,
        required: false,
        unique: false,
        index: true,
    },
    partners: {
        type: String,
        required: false,
        unique: false,
        index: true,
    },
    groups: {
        type: Array,
        required: false,
        unique: false,
        index: false,
    },
    priority: {
        type: Number,
        required: false,
        unique: false,
        index: false,
    },
    archive: {
        type: Array,
        required: false,
        unique: false,
        index: false,
    },
    trash: {
        type: Array,
        required: false,
        unique: false,
        index: false,
    }
})

module.exports = mongoose.model('Task', tasksSchema);