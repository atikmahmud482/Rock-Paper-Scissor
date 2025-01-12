let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
};

choices.forEach((choices) => {
  //   console.log(choices);
  choices.addEventListener("click", () => {
    // console.log("choice was clicked");
    const userChoice = choices.getAttribute("id");
    playGame(userChoice);
    console.log("i am", userChoice);
  });
});
