let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let addButton = document.getElementById("addButton");
let Mge = document.getElementById("mge");

taskInput.addEventListener("keypress", clickEnter);

function clickEnter(e) {
	if (e.key === "Enter") {
		e.preventDefault();
		addButton.click();
	}
}

function addTask() {
	let taskText = taskInput.value.trim();
	if (taskText === "") return;

	let li = document.createElement("li");
	li.innerHTML = `<span onclick="toggleTask(this)"
						>${taskText}</span
					>
					<button id="removeButton" onclick="removeTask(this)">
						❌
					</button>`;

	if (taskList.childNodes.length < 0) {
		Mge.classList.remove("hidden");
	} else {
		Mge.classList.add("hidden");
		taskList.appendChild(li);
		taskInput.value = "";
	}
}

function toggleTask(task) {
	task.classList.toggle("completed");
}

function removeTask(button) {
	button.parentElement.remove();
	if (taskList.childNodes.length <= 0) {
		Mge.classList.remove("hidden");
	}
}
