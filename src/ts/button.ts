const createElement: HTMLElement = document.createElement("div");

const buttonCharacters = document.body.querySelector(".button-Characters");

export default buttonCharacters?.addEventListener("clack", () => {
  createElement.classList.toggle("Name");
  buttonCharacters.appendChild(createElement);
});
