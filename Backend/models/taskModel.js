const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");
class Task {
    static fetchAll(callback) {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                console.log(err);
                return callback([]);
            }
            callback(JSON.parse(data));
        });
    }
    static saveTask(task, callback) {
        this.fetchAll((tasks) => {
            tasks.push(task);
            fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
                if (err) {
                    console.log(err);
                }
                callback();
            });
        });
    }
    static deleteTask(taskId, callback) {
        this.fetchAll((tasks) => {
            const updatedTasks = tasks.filter(task => task.id !== Number(taskId));
            fs.writeFile(filePath, JSON.stringify(updatedTasks, null, 2), (err) => {
                if (err) {
                    console.log(err);
                }
                callback();
            });
        })
    }
    static toggleTask(taskId, callback) {
        this.fetchAll((tasks) => {
            const updatedTasks = tasks.map(task => {
                if(task.id === Number(taskId)){
                    task.completed = !task.completed;
                }
                return task;
            });
            console.log("updatedTasks:", updatedTasks);
            fs.writeFile(filePath, JSON.stringify(updatedTasks, null, 2), (err) => {
                if (err) {
                    console.log(err);
                }
                callback();
            });
        })
    }
    static updateTask(taskId, updatedData, callback) {
        this.fetchAll((tasks) => {
            const updatedTasks = tasks.map(task => {
                if(task.id === Number(taskId)){
                    return { ...task, ...updatedData };
                }
                return task;
            });
            console.log("updatedTasks:", updatedTasks);
            fs.writeFile(filePath, JSON.stringify(updatedTasks, null, 2), (err) => {
                if (err) {
                    console.log(err);
                }
                callback();
            });
        })
    }
}

module.exports = Task;