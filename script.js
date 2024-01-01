let button__boxes = document.querySelectorAll(".button_box");
let resetBttn = document.querySelector("#reset-bttn");
let newButton = document.querySelector("#new-btn");
let messageContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message");

let userTurn0 = true;
let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  userTurn0 = true;
  enableBoxes();
  messageContainer.classList.add("hide");
};

button__boxes.forEach((box) =>
  box.addEventListener("click", () => {
    console.log("The box is clicked");
    if (userTurn0) {
      box.innerText = "0";
      userTurn0 = false;
    } else {
      box.innerText = "X";
      userTurn0 = true;
    }
    box.disabled = true;

    checkWinnerUser();
  })
);

const disableBoxes = () => {
  for (let box of button__boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of button__boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winUser) => {
  msg.innerText = `Congratulations, Winner is ${winUser}`;
  messageContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinnerUser = () => {
  for (let pattern of winningPatterns) {
    let pos1Value = button__boxes[pattern[0]].innerText;
    let pos2Value = button__boxes[pattern[1]].innerText;
    let pos3Value = button__boxes[pattern[2]].innerText;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        console.log("winner", pos1Value);
        showWinner(pos1Value);
      }
    }
  }
};

newButton.addEventListener("click", resetGame);
resetBttn.addEventListener("click", resetGame);
