document.getElementById("btn1").addEventListener("click", function () {
  let value = document.getElementById("input1").value;

  if (value === "") {
    alert("Enter item");
    return;
  }

  let li = document.createElement("li");
  li.textContent = value;

  document.getElementById("ul1").appendChild(li);

  document.getElementById("input1").value = "";
});


document.getElementById("btn2").addEventListener("click", function () {
  let value = document.getElementById("input2").value;

  if (value === "") {
    alert("Enter task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = value;

  let btn = document.createElement("button");
  btn.textContent = "Delete";

  btn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(btn);

  document.getElementById("ul2").appendChild(li);

  document.getElementById("input2").value = "";
});

let toggleBtn = document.getElementById("toggleBtn");
let area = document.getElementById("toggleArea");

toggleBtn.addEventListener("click", function () {
  if (area.style.display === "none") {
    area.style.display = "block";
    toggleBtn.textContent = "Hide";
  } else {
    area.style.display = "none";
    toggleBtn.textContent = "Show";
  }
});