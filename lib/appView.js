var addTaskToView = function() {
    var taskDescription = document.getElementById("taskEntryInput").value;
    if (!taskDescription) {
        return;
    }
    var taskObject = toDoListInterface.createTask(taskDescription);
    renderView();
};

var archiveToggleTaskFromView = function(triggerNode) {
    toDoListInterface.archiveToggle(triggerNode.getAttribute("task-id"));
    renderView();
};

var trashToggleTaskFromView = function(triggerNode) {
    toDoListInterface.trashToggle(triggerNode.getAttribute("task-id"));
    renderView();
};

var deleteTaskFromView = function(triggerNode) {
    toDoListInterface.deleteTask(triggerNode.getAttribute("task-id"));
    renderView();
};

var renderView = function () {

    var taskEntryInput = document.getElementById("taskEntryInput");
    taskEntryInput.value = ""

    var activeTasks = toDoListInterface.returnActiveTasks();
    var archivedTasks = toDoListInterface.returnArchivedTasks();

    var activeTasksDiv = document.getElementById("activeTasksDiv");
    activeTasksDiv.innerHTML = "";
    if (activeTasks.length > 0) {
        var activeHeading = document.createElement("h3");
        var activeHeadingTextNode = document.createTextNode("Active");
        activeHeading.appendChild(activeHeadingTextNode);
        activeTasksDiv.appendChild(activeHeading);
    }
    for (var i = 0; i < activeTasks.length; i++) {
        var task = activeTasks[i];
        var taskEntryDiv = createTaskEntryDiv(task, false);
        activeTasksDiv.appendChild(taskEntryDiv);
    }

    var archivedTasksDiv = document.getElementById("archivedTasksDiv");
    archivedTasksDiv.innerHTML = "";
    if (archivedTasks.length > 0) {
        var archiveHeading = document.createElement("h3");
        var archiveHeadingTextNode = document.createTextNode("Archive");
        archiveHeading.appendChild(archiveHeadingTextNode);
        archivedTasksDiv.appendChild(archiveHeading);
    }
    for (var i = 0; i < archivedTasks.length; i++) {
        var task = archivedTasks[i];
        var taskEntryDiv = createTaskEntryDiv(task, true);
        archivedTasksDiv.appendChild(taskEntryDiv);
    }
};

var createTaskEntryDiv = function(task, isAnArchivedTask) {
    var taskEntryDiv = document.createElement("div");
    taskEntryDiv.setAttribute("id", task.id);

    var taskEntryTrashButton = document.createElement("button");
    var taskEntryTrashTextNode = document.createTextNode("X");
    taskEntryTrashButton.appendChild(taskEntryTrashTextNode);
    taskEntryTrashButton.setAttribute("task-id", task.id);
    taskEntryTrashButton.setAttribute("onclick", "trashToggleTaskFromView(this)");

    var taskEntryCheck = document.createElement("input");
    taskEntryCheck.setAttribute("type", "checkbox");
    taskEntryCheck.setAttribute("task-id", task.id);
    taskEntryCheck.setAttribute("onchange", "archiveToggleTaskFromView(this)");

    var taskEntryLabel = document.createElement("label");
    taskEntryLabel.htmlFor = task.id;
    var taskEntrySpan = document.createElement("span");
    var taskEntryTextNode = document.createTextNode(task.description);
    if (isAnArchivedTask) {
        taskEntryCheck.checked = true;
        var taskEntryStrike = document.createElement("s");
        taskEntryStrike.appendChild(taskEntryTextNode);
        taskEntrySpan.appendChild(taskEntryStrike);
    }
    else {
        taskEntrySpan.appendChild(taskEntryTextNode)
    }
    taskEntryLabel.appendChild(taskEntrySpan);

    var taskEntryBreak = document.createElement("br");

    taskEntryDiv.appendChild(taskEntryTrashButton);
    taskEntryDiv.appendChild(taskEntryCheck);
    taskEntryDiv.appendChild(taskEntryLabel);
    taskEntryDiv.appendChild(taskEntryBreak);

    return taskEntryDiv;
};
