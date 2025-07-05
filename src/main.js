import { projects } from "./js/projects.js";

// AOS install
AOS.init();

// Light Dark Toggle
function setTheme() {
  const toggleBtnElement = document.querySelector(".light-dark-toggle");
  const htmlElement = document.documentElement;

  toggleBtnElement.addEventListener("click", () => {
    if (htmlElement.classList.contains("light-mode")) {
      htmlElement.classList.remove("light-mode");
      toggleBtnElement.innerHTML = `<i class='fa-solid fa-sun' ></i>`;
    } else {
      htmlElement.classList.add("light-mode");
      toggleBtnElement.innerHTML = `<i class='fa-regular fa-moon' ></i>`;
    }
  });
}
setTheme();

// Typing Effect
function setTypingEffect() {
  document.addEventListener("DOMContentLoaded", () => {
    const roleElement = document.getElementById("role");
    const roles = ["Frontend Developer"];
    let letterIndex = 0;

    function typeRole() {
      roleElement.textContent = roles[0].slice(0, letterIndex);
      letterIndex++;

      if (letterIndex > roles[0].length) {
        setTimeout(() => {
          letterIndex = 0;
        }, 850);
      }
    }

    setInterval(() => {
      typeRole();
    }, 100);
  });
}
setTypingEffect();

// Render Projects Dynamically
function renderProjects(projects) {
  const containerElement = document.getElementById("data-container");
  let html = "";
  projects.forEach((project) => {
    html += `<a href="${project.url}" target="_blank"     class="project-box" data-category="${project.category}" data-aos="fade-up">
        <div class="project-box-img">
          <img src="${project.img}" alt="project" />
        </div>
        <div class="project-box-text-container">
          <div class="project-box-text">
            <strong>${project.name}</strong>
            <span>${project.category}</span>
          </div>
          <div class="project-box-btn">
            ${project.icon}
          </div>
        </div>
      </a>`;
  });

  containerElement.innerHTML = html;

  if (window.AOS) AOS.refresh();
}
renderProjects(projects);

// Project Filter
function filterProjects() {
  const filterBtnsElement = document.querySelectorAll(".project-list li");
  filterBtnsElement.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtnsElement.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
      const filterValue = btn.getAttribute("data-filter").trim().toLowerCase();
      const filtered =
        filterValue === "all"
          ? projects
          : projects.filter(
              (p) => p.category.trim().toLowerCase() === filterValue
            );
      renderProjects(filtered);
    });
  });
}
filterProjects();
