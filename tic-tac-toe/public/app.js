"use strict";
const gameBoard = document.querySelector("#gameboard");
const info = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", ""];
let go = "circle";
info.textContent = "Circle goes first";
const createBoard = () => {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index.toString();
        cellElement.addEventListener("click", addGo);
        gameBoard.append(cellElement);
    });
};
createBoard();
function addGo(e) {
    console.log(e.target);
    const goDisplay = document.createElement("div");
    goDisplay.classList.add(go);
    if (e.target instanceof HTMLElement) {
        e.target.append(goDisplay);
        go = go === "circle" ? "cross" : "circle";
        info.textContent = "it is now " + go + "'s go ";
        e.target.removeEventListener("click", addGo);
        checkScore();
    }
}
function checkScore() {
    const allSquares = document.querySelectorAll(".square");
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    winningCombos.forEach((array) => {
        const circleWins = array.every((cell) => {
            var _a;
            const firstChild = (_a = allSquares[cell]) === null || _a === void 0 ? void 0 : _a.firstChild;
            return (firstChild instanceof Element && firstChild.classList.contains("circle"));
        });
        if (circleWins) {
            info.textContent = "circle wins";
            allSquares.forEach((square) => square.replaceWith(square.cloneNode(true)));
            return;
        }
        const crossWins = array.every((cell) => {
            var _a;
            const firstChild = (_a = allSquares[cell]) === null || _a === void 0 ? void 0 : _a.firstChild;
            return (firstChild instanceof Element && firstChild.classList.contains("cross"));
        });
        if (crossWins) {
            info.textContent = "cross wins";
            allSquares.forEach((square) => square.replaceWith(square.cloneNode(true)));
            return;
        }
    });
    // JS code
    //   winningCombos.forEach((array: number[]) => {
    //     const circleWins: boolean = array.every((cell: number) =>
    //       allSquares[cell]?.firstChild?.classList.contains("circle")
    //     );
    //     if (circleWins) {
    //       info.textContent = "circle wins";
    //       allSquares.forEach((square: Element) =>
    //         square.replaceWith(square.cloneNode(true))
    //       );
    //       return;
    //     }
    //   });
}
