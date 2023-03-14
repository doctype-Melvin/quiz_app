const toggleSwitch = document.querySelector('[data-js="toggleMode"]');
const body = document.querySelector("body");
toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  console.log(body);
});
