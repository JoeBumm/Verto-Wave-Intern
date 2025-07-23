const domJs = document.querySelector(".domJs");
const container = document.createElement("div");
const button = document.createElement("button");
container.setAttribute("class", "domInserted");

container.style.height = "50vh";
container.textContent =
  "This whole container is injected by js dom, cool right?";
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.flexDirection = "column";
container.style.fontSize = "3vw";
button.textContent = "Click me";
button.style.margin = "10px";

button.addEventListener("click", function () {
  const confirmed = confirm("⚠️ Are you sure?");
  if (confirmed) {
    container.style.backgroundColor = "green";
    container.style.color = "white";
  } else {
    container.style.backgroundColor = "red";
  }
});
container.append(button);
domJs.append(container);

//////////////////////////////////
// Rock Paper Scissors

const gameContainer = document.querySelector(".gameContainer");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
let playerChoice = "";
let cpuChoice = -1;

function cpuPlay() {
  const cpuChoice = Math.floor(Math.random() * 3); // Floor makes the random number an int
  switch (cpuChoice) {
    case 0: // Rock
      console.log("cpu rock");
      return;
    case 1: // Paper
      console.log("cpu paper");
      return 1;
    case 2: //scissor
      console.log("cpu scissor");
      return 2;
    default:
      console.log("invalid choice");
      return -1;
  }
}

function WhoWon(playerChoice, cpuChoice) {
  const choices = ["r", "p", "s"];

  const cpuChar = choices[cpuChoice];

  if (playerChoice === cpuChar) {
    console.log("It's a draw!");
    return "draw";
  }

  if (
    (playerChoice === "r" && cpuChar === "s") ||
    (playerChoice === "p" && cpuChar === "r") ||
    (playerChoice === "s" && cpuChar === "p")
  ) {
    console.log("Player wins!");
    return "player";
  } else {
    console.log("CPU wins!");
    return "cpu";
  }
}

rock.addEventListener("click", function () {
  const cpuChoice = cpuPlay();
  const result = WhoWon("r", cpuChoice);
  alert("Result: " + result + " wins");
});

paper.addEventListener("click", function () {
  const cpuChoice = cpuPlay();
  const result = WhoWon("p", cpuChoice);
  alert("Result: " + result + " wins");
});

scissor.addEventListener("click", function () {
  const cpuChoice = cpuPlay();
  const result = WhoWon("s", cpuChoice);
  alert("Result: " + result + " wins");
});
