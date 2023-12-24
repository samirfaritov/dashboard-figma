const tab = document.querySelector(".tab");
const dob = document.querySelector(".dob");

tab.addEventListener("click", () => {
  console.log("click");
  location.href = "/html/dashboard.html";
});

const btn = document.querySelector(".btn");
const bx = document.querySelector(".bx");

bx.addEventListener("click", () => {
  dob.style.display = "none";
});

btn.addEventListener("click", () => {
  dob.style.display = "block";
});

const zagolovok = document.querySelector(".zagolovok");
const opisanie = document.querySelector(".opisanie");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const content = document.querySelector(".content");

let title = "";
let project = "";
let data = "";
let vremya = "";

zagolovok.addEventListener("keyup", (e) => {
  title = e.target.value;
});
opisanie.addEventListener("keyup", (e) => {
  project = e.target.value;
});
time.addEventListener("keyup", (e) => {
  data = e.target.value;
});
date.addEventListener("keyup", (e) => {
  vremya = e.target.value;
});

const neww = document.querySelector(".neww");
const progresse = document.querySelector(".progresse");
const don = document.querySelector(".don");
let statuss = "";

window.addEventListener("click", (e) => {
  let newDate = new Date();
  let hours = newDate.getHours();
  let minute = newDate.getMinutes();
  let a = newDate.getDate();
  let b = newDate.getMonth();
  let c = newDate.getFullYear();
  e.preventDefault();
  if (e.target.hasAttribute("data-action")) {
    let newTodo = {
      title,
      project,
      data: `${a}:${b}:${c}`,
      vremya: `${hours}:${minute}`,
    };

    if ((title, project, data, vremya === "")) {
      alert("hammasini to'ldir!!!");
    } else {
      let todoHtml = `
          <div class="item">
          <p class="project">${newTodo.project}</p>
          <p class="title">${newTodo.title}</p>
          <div class="p3">
              <p class="data">${newTodo.data}</p>
              <p class="vremya">${newTodo.vremya}</p>
              <p class="start">${statuss}</p>
          </div>
          </div>
              `;

      content.insertAdjacentHTML("beforeend", todoHtml);

      zagolovok.value = "";
      opisanie.value = "";
      time.value = "";
      date.value = "";

      dob.style.display = "none";
    }

    const start = document.querySelector(".start");

    if (statuss === "new") {
      start.innerHTML = "Не выполнено";
      start.style.color = "#FF3F3F";
    } else if (statuss === "progress") {
      start.innerHTML = "В прогрессе";
      start.style.color = "#007FFF";
    } else if (statuss === "done") {
      start.innerHTML = "Готово";
      start.style.color = "#000";
    }



    
    
  }
});

const select = document.querySelector("select");
const deletee = document.querySelector('.delete')

select.addEventListener('click', () => {
  deletee.classList.add('none')

})

function selectStatus() {
  select.addEventListener("change", (e) => {
    console.log(e.target.value);
    return (statuss = e.target.value);
  });
}
selectStatus()