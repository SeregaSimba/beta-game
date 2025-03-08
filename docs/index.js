const getButtonVampire = document.querySelector("#Vampire");
const divCharactersVampire = document.createElement("div");
divCharactersVampire.classList.add("vampire");

const getButtonWerewolf = document.querySelector("#Werewolf");
const divCharactersWerewolf = document.createElement("div");
divCharactersWerewolf.classList.add("werewolf");

const getButtonWizard = document.querySelector("#Wizard");
const divCharactersWizard = document.createElement("div");
divCharactersWizard.classList.add("wizard");

const getButtonHuman = document.querySelector("#Human");
const divCharactersHuman = document.createElement("div");
divCharactersHuman.classList.add("human");

function toggleCharacters(button, charactersDiv) {
  if (button.contains(charactersDiv)) {
    button.removeChild(charactersDiv);
  } else {
    button.appendChild(charactersDiv);
  }
}

getButtonVampire.addEventListener("click", () => {
  toggleCharacters(getButtonVampire, divCharactersVampire);
});

getButtonWerewolf.addEventListener("click", () => {
  toggleCharacters(getButtonWerewolf, divCharactersWerewolf);
});

getButtonWizard.addEventListener("click", () => {
  toggleCharacters(getButtonWizard, divCharactersWizard);
});

getButtonHuman.addEventListener("click", () => {
  toggleCharacters(getButtonHuman, divCharactersHuman);
});
