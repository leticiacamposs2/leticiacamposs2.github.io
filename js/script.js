const sidedrawer = document.querySelector(".sidedrawer");
const backdrop = document.querySelector(".backdrop");
const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
  sidedrawer.classList.add("active");
  backdrop.classList.add("show");
});

backdrop.addEventListener("click", () => {
  sidedrawer.classList.remove("active");
  backdrop.classList.remove("show");
});

// certificates part
const persons = document.querySelectorAll(".courses__picture");
const personName = document.querySelector(".certificates__bio__name");
const personRole = document.querySelector(".certificates__bio__role");
const personContent = document.querySelector(".certificates__content__text");
const personStars = document.querySelector(".certificates__content__stars");

let certificatess = [
  {
    id: "1",
    name: "Alura",
    role: "encurtador.com.br/hDKZ0",
    content:
      "Cursos: Javascript, Bootstrap, Jasmine (testes unitários) e React",
    stars: 5,
  },
  {
    id: "2",
    name: "Node.js para Iniciantes - #NodeBR!",
    role: "encurtador.com.br/hmKX7",
    content: "Aprendi desde o básico de Javascript, ciclo de vida, manipulação de listas, testes, autenticação, autorização, documentação de serviços e gerenciamento de variáveis de ambiente (environments) de aplicações. Acesse: https://github.com/leticiacamposs2/node-js-para-iniciantes",
    stars: 5,
  },
  {
    id: "3",
    name: "Scrum Foundation Professional Certificate (SFPC)",
    role: "encurtador.com.br/aeENU",
    content:
      "Obtive o conhecimento do framework Scrum, suas principais definições e papéis",
    stars: 5,
  },
  {
    id: "4",
    name: "React Bootcamp",
    role: " ",
    content:
      "Durante este bootcamp vimos conceitos de Javascript (promisses, callbacks e async/await), Formik, React UI Framework, React Router, Jest e Redux",
    stars: 5,
  },
];

console.log(persons);

for (const person of persons) {
  person.addEventListener("click", (e) => {
    let index = e.target.id.split("-")[1];
    console.log(person.classList[1]);
    renderContent(index);
  });
}

renderContent(1);

function renderContent(index) {
  personName.innerText = `${certificatess[index].name}`;
  personRole.innerText = `${certificatess[index].role}`;
  personContent.innerText = `${certificatess[index].content}`;
  personContent.innerText = `${certificatess[index].content}`;

  for (const person of persons) {
    if (index === person.classList[1]) {
      person.classList.add("active");
    } else {
      person.classList.remove("active");
    }
  }

  let starHTML = ``;
  for (let i = 0; i < certificatess[index].stars; i++) {
    starHTML += `<span
    class="iconify star active"
    data-icon="entypo:star"
    data-inline="false"
  ></span> `;
  }
  personStars.innerHTML = starHTML;
}

// certificates part

// handle navbar background
const navbar = document.getElementById("navbar");

document.addEventListener("scroll", () => {
  if (window.top.scrollY > 199) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});