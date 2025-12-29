// Get elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task
function addTask() {
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // delete icon

    li.appendChild(span);
    listContainer.appendChild(li);

    inputBox.value = "";
    saveData();
}

// Handle click events (check & delete)
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save tasks to localStorage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Load tasks from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

// Load saved tasks on page load
showTask();
