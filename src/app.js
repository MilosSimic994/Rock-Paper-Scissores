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
//show compiuter choice

const showCompiuterChoice = () => {
  setTimeout(() => {
    const shadowEl = startOption.querySelector("div:last-child");
    const newItem = document.createElement("div");
    newItem.innerHTML = `
        <h3>the house picked</h3>
        <img class="choice" id="${compiuter.toLowerCase()}" src="/images/icon-${compiuter.toLowerCase()}.svg" />
      `;

    shadowEl.parentNode.replaceChild(newItem, shadowEl);
  }, 1000);
};

//player choice
const playerChoice = (e) => {
  player = e.target.getAttribute("id").toUpperCase();
  compiuterChoice();

  console.log(e.target);
  console.log(compiuter);
  startOption.classList.add("start__optionComp");

  startOption.innerHTML = `
  <div>
    <h3>you Picked</h3>
    <img class="choice" id="${player.toLowerCase()}" src="/images/icon-${player.toLowerCase()}.svg" />
  </div>
  <div class="newTry">
    <h3 id="winner">pobedio si</h3>
     <button >Play Again</button>
  </div>   
  <div>
    <h3>the house pick...</h3>
    <div class="shadow"></div>
  </div>

  `;
  startOption.querySelector("button").addEventListener("click", () => {
    location.reload();
  });
  showCompiuterChoice();
  setTimeout(showWinner, 2000);
};

//show the winner

const showWinner = () => {
  let winner = document.getElementById("winner");
  const newTry = document.querySelector(".newTry");
  newTry.classList.add("visible");
  if (
    (player === PAPER && compiuter === ROCK) ||
    (player === ROCK && compiuter === SCISSORS) ||
    (player === SCISSORS && compiuter === PAPER)
  ) {
    winner.innerText = "You WIN";
  } else if (player === compiuter) {
    winner.innerText = "IS A DROW";
  } else {
    winner.innerText = "You LOSE";
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
