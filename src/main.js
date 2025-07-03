// AOS install
AOS.init();

// Light Dark Toggle
function setTheme() {
  const toggleBtnElement = document.querySelector(".light-dark-toggle");
  const htmlElement = document.documentElement;

  document.addEventListener("click", () => {
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
