// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name==="" || email==="" || subject==="" || message===""){

        messageBox.innerHTML="Please fill all fields.";
        messageBox.style.color="red";
        return;

    }

    if(!emailPattern.test(email)){

        messageBox.innerHTML="Please enter a valid email.";
        messageBox.style.color="red";
        return;

    }

    messageBox.innerHTML="Form Submitted Successfully ✅";
    messageBox.style.color="green";

    form.reset();

});


// ===============================
// Todo App
// ===============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const searchTask = document.getElementById("searchTask");
const taskCount = document.getElementById("taskCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// ===============================
// Save Local Storage
// ===============================

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}


// ===============================
// Display Tasks
// ===============================

function displayTasks(){

    taskList.innerHTML="";

    let keyword = searchTask.value.toLowerCase();

    let filtered = tasks.filter(task=>task.toLowerCase().includes(keyword));

    filtered.forEach((task,index)=>{

        taskList.innerHTML += `

<li>

<span>${task}</span>

<div class="actions">

<button class="editBtn" onclick="editTask(${index})">

Edit

</button>

<button class="deleteBtn" onclick="deleteTask(${index})">

Delete

</button>

</div>

</li>

`;

    });

    taskCount.innerHTML = tasks.length;

}


// ===============================
// Add Task
// ===============================

addTaskBtn.addEventListener("click",()=>{

    if(taskInput.value.trim()==""){

        alert("Enter a task");

        return;

    }

    tasks.push(taskInput.value);

    taskInput.value="";

    saveTasks();

    displayTasks();

});


// ===============================
// Delete Task
// ===============================

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();

}


// ===============================
// Edit Task
// ===============================

function editTask(index){

    let newTask = prompt("Edit Task",tasks[index]);

    if(newTask!==null && newTask.trim()!=""){

        tasks[index]=newTask;

        saveTasks();

        displayTasks();

    }

}


// ===============================
// Search
// ===============================

searchTask.addEventListener("keyup",displayTasks);


// ===============================
// Load
// ===============================

displayTasks();

console.log("Task-2 Loaded Successfully");