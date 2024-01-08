const content = document.querySelector(".content");
const dob = document.querySelector(".dob");
const bx = document.querySelector(".bx");
const model = document.querySelector(".model");
const img = document.querySelector(".img");
const namee = document.querySelector(".name");
const data = document.querySelector(".data");
const price = document.querySelector(".price");

let m = "";
let i = "";
let n = "";
let d = "";
let p = "";

model.addEventListener("keyup", (e) => {
  m = e.target.value;
});
img.addEventListener("keyup", (e) => {
  i = e.target.value;
});
namee.addEventListener("keyup", (e) => {
  n = e.target.value;
});
data.addEventListener("keyup", (e) => {
  d = e.target.value;
});
price.addEventListener("keyup", (e) => {
  p = e.target.value;
});

let shop = {
  dashboard: [],
};

let BASE_URL = "http://localhost:5055/";

const getTodos = async () => {
  let response = await axios.get(`${BASE_URL}shop`);

  return (shop.dashboard = response.data);
};

getTodos();

window.addEventListener("click", (e) => {
  e.preventDefault();
  let newtodo = {
    m,
    i,
    n,
    d,
    p
  };
  if (e.target.hasAttribute("data-action")) {
    shop.dashboard.forEach((item) => {
      let todoHtml = `
        <div class="item">
        <p class="model">${item.model}</p>
        <div class="img">
          <img src="${item.img}" alt="">
        </div>
        <p class="name">${item.name}</p>
        <br>
        <div class="p">
          <p class="data">${item.data}</p>
          <p class="price">${item.price}</p>
        </div>
        <button class="delete" id="${item.id}">Delete</button>
      </div>
        `;
      content.insertAdjacentHTML("beforeend", todoHtml);
      dob.style.display = "none";
    });

    const postTodos = async () => {
      try {
        let response = await axios.post(`${BASE_URL}shop`, {
          "id": shop.dashboard.length + 1,
          "model": `${m}`,
          "img": `${i}`,
          "name": `${n}`,
          "data": `${d}`,
          "price": `${p}`
        });
      } catch (error) {
        console.log(error);
      }
    }
    getTodos();
    postTodos()
  }
  


  if (e.target.classList.contains('delete')) {
    let id = e.target.id
    
    const removeTodo =  async () => {
      let res = await axios.delete(`${BASE_URL}shop/${id}`)
      console.log(res);
    }

    removeTodo()
    getTodos()
  }
  
});


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
