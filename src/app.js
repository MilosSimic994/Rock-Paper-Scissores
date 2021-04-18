const modal = document.getElementById("modal");
const rulesBtn = document.getElementById("rules");
const closeBtn = document.getElementById("closeBtn");
const startOption = document.querySelector(".start__option");

// const paper = doucment.getElementById("paper");
// const scissors = doucment.getElementById("scissors");
// const rock = doucment.getElementById("rock");

const choices = startOption.querySelectorAll("img");
console.log(choices);

let player;

//playerr choice
const playerChoice = (e) => {
  player = e.target.getAttribute("id").toUpperCase();
  console.log(player);
};

// compiuter choice

const compiuterChoice = () => {};

//show rules
const openRules = () => {
  modal.classList.add("visible");
};
//hidde rules
const closeRules = (e) => {
  if (e.target === modal || e.target === closeBtn) {
    modal.classList.remove("visible");
  }
};

//Add Events Listeners
rulesBtn.addEventListener("click", openRules);
closeBtn.addEventListener("click", closeRules);
modal.addEventListener("click", closeRules);

choices.forEach((choice) => {
  choice.addEventListener("click", playerChoice);
});
