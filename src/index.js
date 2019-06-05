document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelector('#tasks')

  document.querySelector('form').addEventListener("submit", function(event) {
  	event.preventDefault();
  	let task = event.target[0].value;
  	if (task !== "") {
  		addTask(task);
  	}
  	deleteTasks();
  	colorTasks();
  	morecolorTasks();
  	event.target[0].value = "";
  }, false);

  function addTask(task) {
	let newNode = document.createElement('li');
	let deleteBtn = document.createElement('button');
	newNode.className = "taskItems"
	newNode.textContent = task
	deleteBtn.innerHTML = "Delete";
	deleteBtn.id = "delete-btn";
	
	newNode.appendChild(deleteBtn);
	taskList.appendChild(newNode);
	deleteBtn.addEventListener('click', () => {
		newNode.parentNode.removeChild(newNode);
	}, false);
  }

  function deleteTasks() {
 
    document.querySelector('#button').addEventListener("click", function(event) {
      event.preventDefault();
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
      }
    });
  }

  function colorTasks() {
 
    document.querySelector('#tasks').addEventListener("mouseover", function(event) {
     event.target.style.color = "pink";
     setTimeout(function(){
      event.target.style.color = "";
    },500);
    });
  }

  function morecolorTasks() {
 
    document.querySelector('#tasks').addEventListener("mouseenter", function(event) {
     event.target.style.color = "purple";
     setTimeout(function(){
      event.target.style.color = "";
    },500);
    });
  }
}, false);