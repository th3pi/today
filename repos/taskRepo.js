const Task = require('../models/task')

class TaskRepository {
    constructor(model) {
        this.model = model;
    }

    createTask(name, description, status, dueBy, partners, groups, priority, archive, trash) {
        const newTask = {
            name,
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

    getAll() {
        return this.model.find();
    }
}

module.exports = new TaskRepository(Task);