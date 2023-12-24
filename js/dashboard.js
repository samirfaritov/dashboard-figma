const zagolovok = document.querySelector(".zagolovok");
const add = document.querySelector(".add");
const content = document.querySelector(".content");
const opisanie = document.querySelector(".opisanie");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const dob = document.querySelector(".dob");
const bx = document.querySelector(".bx");

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
      <br>
      <p class="title">
      ${newTodo.title}
      </p>
      <br>
      <div class="p">
      <p class="data">${newTodo.data}</p>
      
      <p class="vremya">${newTodo.vremya}</p>
      </div>
      <br>
      <p class="start">${statuss}</p>
      </div>
      `;
      
      content.insertAdjacentHTML("beforeend", todoHtml);
      zagolovok.value = "";
      opisanie.value = "";
      time.value = "";
      date.value = "";
      
      dob.style.display = "none";
      }


      const start = document.querySelector('.start')

      if(statuss === 'new') {
        start.innerHTML = 'Не выполнено'
        start.style.color = '#FF3F3F'
      } else if (statuss === 'progress') {
        start.innerHTML = 'В прогрессе'
        start.style.color = '#007FFF'
      } else if (statuss === 'done') {
        start.innerHTML = 'Готово'
        start.style.color = '#000'
      }

    }
  });
  const select = document.querySelector("select");

  function selectStatus() {
    select.addEventListener('change', (e) => {
      return statuss = e.target.value
    })
  }


  console.log( selectStatus());
const btn = document.querySelector(".btn");

bx.addEventListener("click", () => {
  dob.style.display = "none";
});

btn.addEventListener("click", () => {
  dob.style.display = "block";
});

const tab = document.querySelector(".tab");

tab.addEventListener("click", () => {
  location.href = "/index.html";
});
