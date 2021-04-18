const modal = document.getElementById("modal");
const rulesBtn = document.getElementById("rules");
const closeBtn = document.getElementById("closeBtn");

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
