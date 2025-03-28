let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

taskInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") addTask();
});

function addTask() {
	let taskText = taskInput.value.trim();
	if (taskText === "") return;
	taskInput.value = "";

	let li = document.createElement("li");
	li.innerHTML = `
				<div>
					<input
						type="checkbox"
						class="task-check"
					/>
					<span class="task-text"
						>${taskText}</span
					>
				</div>
				<div>
					<button class="edit">
						🗃️
					</button>
					<button class="delete">
						❌
					</button>
				</div>
			`;

	isChecked(li);

	editTask(li);

	removeTask(li);

	taskList.appendChild(li);
}

function isChecked(li) {
	let checkBox = li.querySelector(".task-check");

	checkBox.addEventListener("change", () => {
		let taskText = li.querySelector(".task-text");
		let editBtn = li.querySelector(".edit");

		taskText.classList.toggle("completed", checkBox.checked);
		editBtn.classList.toggle("hidden", checkBox.checked),
			li.classList.toggle("completedLi", checkBox.checked);
	});
}

function editTask(li) {
	let editBtn = li.querySelector(".edit");

	editBtn.addEventListener("click", () => {
		let taskTextElement = li.querySelector(".task-text");

		taskInput.value = taskTextElement.textContent;
		taskInput.focus();
		li.remove();
	});
}

function removeTask(li) {
	let deleteBtn = li.querySelector(".delete");
	deleteBtn.addEventListener("click", () => li.remove());
}
