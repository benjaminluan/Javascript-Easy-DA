const squareHTML = document.querySelectorAll(".board__square");
const turnHTML = document.querySelector(".board__title");
let turn = false;
let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

let xSquare = [];
let oSquare = [];

squareHTML.forEach((square, index) =>
  square.addEventListener("click", (event) => {
    if (turn === false && event.target.innerHTML === "") {
      event.target.innerHTML = "X";
      turn = true;
      turnHTML.innerHTML = "O's turn";
      xSquare.push(index);
    } else if (turn === true && event.target.innerHTML === "") {
      turn = false;
      event.target.innerHTML = "O";
      turnHTML.innerHTML = "X's turn";
      oSquare.push(index);
    }
    checkForWin();
  })
);

let dummyArray = [
  [0, 3, 5],
  [2, 4, 6],
];

let dummyWin = [0, 3, 5];

const checkForWin = () => {
  for (let i = 0; i < dummyArray.length; i++) {
    let matchingArray = dummyArray[i];
    let some1 = dummyWin[matchingArray[0]];
    let some2 = dummyWin[matchingArray[1]];
    let some3 = dummyWin[matchingArray[2]];

    console.log(some3)
  }
};

// Some of the Arrays, every value inside of array
// will equal to winning array.

checkForWin();
