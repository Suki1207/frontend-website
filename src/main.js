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

// Project Filter
function filterProjects() {
  const filterBtnsElement = document.querySelectorAll(".project-list li");
  const projectCardsElement = document.querySelectorAll(".project-box");

  filterBtnsElement.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtnsElement.forEach((button) => {
        button.classList.remove("active");
      });
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter").trim().toLowerCase();

      projectCardsElement.forEach((card) => {
        const cardCategory = card
          .getAttribute("data-category")
          .trim()
          .toLowerCase();

        // Debugging
        console.log(`Filter: "${filterValue}", Card: "${cardCategory}"`);

        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "flex";
          card.setAttribute("data-aos", "fade-up");
        } else {
          card.style.display = "none";
          card.removeAttribute("data-aos");
        }
      });

      if (window.AOS) {
        AOS.refresh();
      }
    });
  });
}
filterProjects();
