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
}

document.addEventListener("DOMContentLoaded", setTypingEffect);
