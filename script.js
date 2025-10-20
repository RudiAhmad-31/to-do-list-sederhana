const tambah = document.getElementById("tambah");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

tambah.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Yang Bener Atuh, Isi dulu !");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => li.remove());


  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}
