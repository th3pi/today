const mongoose = require('mongoose')

/**
 * Mongoose Schema -- Task model defines the attributes for a task entry in the database
 * @prop {String} title Title of the Task
 * @prop {String} description Brief description of the task
 * @prop {String} status Status of the task (due soon, ongoing, done, cancelled)
 * @prop {String} dueBy Date and time when the task is due by
 * @prop {Array} partners Array of user ids who are collaborating on the task
 * @prop {Array} groups Array of group ids to which this task belong to
 * @prop {Number} priority Number to quantify prioritization, higher number means higher priority
 * @prop {Array} archive Array of archived task ids
 * @prop {Array} trash Array of deleted task ids
 */
const tasksSchema = new mongoose.Schema({
    title: {
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
        type: Array,
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