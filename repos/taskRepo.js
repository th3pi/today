const Task = require('../models/task')

class TaskRepository {
    constructor(model) {
        this.model = model;
    }

    /**
     * Creates a Task using the mongoose Task schema, defined in the task model
     * @param {String} title Title of the Task
     * @param {String} description Brief description of the task
     * @param {String} status Status of the task (due soon, ongoing, done, cancelled)
     * @param {String} dueBy Date and time when the task is due by
     * @param {Array} partners Array of user ids who are collaborating on the task
     * @param {Array} groups Array of group ids to which this task belong to
     * @param {Number} priority Number to quantify prioritization, higher number means higher priority
     * @param {Array} archive Array of archived task ids
     * @param {Array} trash Array of deleted task ids
     */
    createTask(title, description, status, dueBy, partners, groups, priority, archive, trash) {
        const newTask = {
            title,
            description,
            status,
            dueBy,
            partners,
            groups,
            priority,
            archive,
            trash
        }
        const task = new this.model(newTask)

        return task.save();
    }

    /**
     * Returns all the tasks stored in the database, including archived and trashed tasks
     */
    getAll() {
        return this.model.find();
    }
}

module.exports = new TaskRepository(Task);