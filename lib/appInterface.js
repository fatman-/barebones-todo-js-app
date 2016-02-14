var toDoListInterface = function() {
    var toDoList = [{description: "Buy Groceries", id: "task1", isDone: false, isTrash: false},
                    {description: "Go to gym", id: "task2", isDone: false, isTrash: false},
                    {description: "Finish work", id: "task3", isDone: true, isTrash: false},
                    {description: "Call Dad", id: "task4", isDone: true, isTrash: false},
                    {description: "Trash Task", id: "task5", isDone: false, isTrash: true}]

    // var toDoList = [];

    // TODO: Implement localStorage...
    // Save the 'toDoList' array to localStorage
    // var saveToLocalStorage = function() {}
    // keyName: ToDoApp_appInterface_toDoList

    return {
        // Create and return a task object with appropriate props.
        // Push it to 'toDoList' array
        createTask: function (description, id, priority, isDone, isTrash) {
            var taskObject = {
                description: description,
                id: id || guidGenerator(),
                priority: priority || "N",
                isDone: isDone || false,
                isTrash: isTrash || false,
            };
            toDoList.push(taskObject);
            return taskObject;
        },

        // Toggle the 'isArchive' attribute of a task
        archiveToggle: function (taskId) {
            for (var i = 0; i < toDoList.length; i++) {
                if (toDoList[i].id === taskId) {
                    toDoList[i].isDone = !toDoList[i].isDone;
                    return;
                }
            }
        },

        // Toggle the 'isTrash' attribute of a task
        trashToggle: function (taskId) {
            for (var i = 0; i < toDoList.length; i++) {
                if (toDoList[i].id === taskId) {
                    toDoList[i].isTrash = !toDoList[i].isTrash;
                    return;
                }
            }
        },

        // Caution: Deletion is permanent...
        deleteTask: function (taskId) {
            for (var i = 0; i < toDoList.length; i++) {
                if (toDoList[i].id === taskId) {
                    toDoList.splice(i, 1);
                    return;
                }
            }
        },

        // Return an array containing desired tasks
        returnAllTasks: function() {
            var allTasks = [];
            for (var i = 0; i < toDoList.length; i++) {
                    allTasks.push(toDoList[i]);
            }
            return allTasks;
        },
        returnActiveTasks: function() {
            var activeTasks = [];
            for (var i = 0; i < toDoList.length; i++) {
                if (!toDoList[i].isDone && !toDoList[i].isTrash) {
                    activeTasks.push(toDoList[i]);
                }
            }
            return activeTasks;
        },
        returnArchivedTasks: function() {
            var archivedTasks = [];
            for (var i = 0; i < toDoList.length; i++) {
                if (toDoList[i].isDone && !toDoList[i].isTrash) {
                    archivedTasks.push(toDoList[i]);
                }
            }
            return archivedTasks;
        },
        returnTrashTasks: function() {
            var trashTasks = [];
            for (var i = 0; i < toDoList.length; i++) {
                if (toDoList[i].isTrash) {
                    desiredTasks.push(toDoList[i]);
                }
            }
            return trashTasks;
        },
    }
}();

// Helper function for generating unique IDs
var guidGenerator = function () {
    function S4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' +
        S4() + '-' + S4() + S4() + S4();
};
