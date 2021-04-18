const modal = document.getElementById("modal");
const rulesBtn = document.getElementById("rules");
const closeBtn = document.getElementById("closeBtn");
const startOption = document.querySelector(".start__option");

const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const ROCK = "ROCK";

const choices = startOption.querySelectorAll("img");
console.log(choices);

let player;
let compiuter;

//compiuter choice

const compiuterChoice = () => {
  const random = Math.random().toFixed(2);
  console.log(random);
  if (random < 0.33) {
    compiuter = PAPER;
  } else if (random > 0.33 && random < 0.66) {
    compiuter = SCISSORS;
  } else {
    compiuter = ROCK;
  }
};

//player choice
const playerChoice = (e) => {
  player = e.target.getAttribute("id").toUpperCase();
  showWinner();

  console.log(e.target);
  console.log(compiuter);
  startOption.classList.add("start__optionComp");

  startOption.innerHTML = `
  <div>
    <h3>you Pick</h3>
    <img class="choice" id="${player.toLowerCase()}" src="/images/icon-${player.toLowerCase()}.svg" />
  </div>
  <div>
    <h3>you Pick</h3>
    <img class="choice" id="${compiuter.toLowerCase()}" src="/images/icon-${compiuter.toLowerCase()}.svg" />
  </div>
  `;
};

//show the winner

const showWinner = () => {
  compiuterChoice();
  if (
    (player === PAPER && compiuter === ROCK) ||
    (player === ROCK && compiuter === SCISSORS) ||
    (player === SCISSORS && compiuter === PAPER)
  ) {
    console.log("player win");
  } else if (player === compiuter) {
    console.log("is draw");
  } else {
    console.log("comp is win");
  }
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
