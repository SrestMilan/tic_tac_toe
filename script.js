let button__boxes = document.querySelectorAll(".button_box");
let resetBttn = document.querySelector("#reset-bttn");

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

const checkWinnerUser = () => {
  for (let pattern of winningPatterns) {
  }
};
