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
let compiuter;

//compiuter choice

const compiuterChoice = () => {
  const random = Math.random().toFixed(2);
  console.log(random);
  if (random < 0.33) {
    compiuter = "PAPER";
  } else if (random > 0.33 && random < 0.66) {
    compiuter = "SCISSORS";
  } else {
    compiuter = "ROCK";
  }
};
compiuterChoice();
console.log(compiuter);

//player choice
const playerChoice = (e) => {
  player = e.target.getAttribute("id").toUpperCase();
  console.log(player);
};

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
