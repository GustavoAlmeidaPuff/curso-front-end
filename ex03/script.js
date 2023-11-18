function addTask(){
    var taskInput = document.getElementById("taskInput")
    var taskList = document.getElementById("taskList")

    if(taskInput.value !== ""){
        var taskItem = document.createElement("div")
        taskItem.classList.add("task-item")
        
        var checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.addEventListener("chage", function() {
            // adicionar funcinalidade para marcar como cncluído
            var taskLabel = taskItem.querySelector("label")
            if (checkbox.checked) {
                taskLabel.style.textDecoration = "line-trough"
            } else {
                taskLabel.style.textDecoration = "none"
            }
        })

        var taskLabel = document.createElement ("label")
        taskLabel.textContent = taskInput.value

        taskItem.appendChild(checkbox)
        taskItem.appendChild(taskLabel)
        taskList.appendChild(taskItem)

        taskInput.value = ''

    }

    function deleteSelectedTasks() {
        var taskList = document.getElementById("tasklist")
        var tasks = taskList.getElementsByClassName("task-item")

        for (var i = 0; i < tasks.length; i++) {
            var checkbox = tasks[i].querySelector("input[type='checkbox']")
            if (checkbox.checked) {
                taskList.removeChild (tasks[i])
            }
        }
    }
}