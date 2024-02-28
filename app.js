let boxes = document.querySelectorAll(".box");
let h3 = document.querySelector("h3");
let resetBtn = document.querySelector(".reset-btn");

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let count1 = 0;

function resetGame() {
    turnO = true;
    count1 = 0;
    h3.innerText = "'X' Starts";
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        
    })
}


resetBtn.addEventListener("click", () => {
    resetGame();
});

turnO = true;
boxes.forEach((box) => {
    
    box.addEventListener("click", () => {
        h3.innerText = "";
        if (turnO) {
            box.innerText = 'X';
            box.style.color = 'red';
            turnO = false;
        }
        else {
            box.innerText = 'O';
            box.style.color = 'blue';
            turnO = true;
        }
        box.disabled = true;
        count1++;
        checkAns();
        if (count1 == 9 && h3.innerText == "") {
            h3.innerText = "IT'S A DRAW!";
        }
    });
});


function displayWinner(winner) {
    h3.innerText = `WINNER: ${winner}`;
    boxes.forEach((box) => {
        box.disabled = true;
    })
}
function checkAns() {
    for (let pattern of winPattern) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                displayWinner(posVal1);
            }
        }

    }

}