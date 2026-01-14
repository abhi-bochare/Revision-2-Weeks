const tasks = [
  { id: 1, text: "Complete project proposal" },
  { id: 2, text: "Review code submissions" },
  { id: 3, text: "Update documentation" },
  { id: 4, text: "Team meeting" },
];

const list = document.getElementById("taskList");
let draggedItem = null;

function renderList() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const dropZone = document.createElement("div");
    dropZone.className = "drop-zone";
    dropZone.dataset.index = index;
    addDropZoneEvents(dropZone);
    list.appendChild(dropZone);

    const li = document.createElement("li");
    li.textContent = task.text;
    li.draggable = true;
    li.dataset.index = index;

    li.addEventListener("dragstart", () => {
      draggedItem = index;
      li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
      li.classList.remove("dragging");
      draggedItem = null;
    });

    list.appendChild(li);
  });

  const finalZone = document.createElement("div");
  finalZone.className = "drop-zone";
  finalZone.dataset.index = tasks.length;
  addDropZoneEvents(finalZone);
  list.appendChild(finalZone);
}

function addDropZoneEvents(zone) {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("active");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("active");
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("active");

    const dropIndex = Number(zone.dataset.index);
    if (draggedItem === null || draggedItem === dropIndex) return;

    const movedItem = tasks.splice(draggedItem, 1)[0];
    tasks.splice(
      dropIndex > draggedItem ? dropIndex - 1 : dropIndex,
      0,
      movedItem
    );

    renderList();
  });
}

renderList();
