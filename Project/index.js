let currentPlayer = "X"
let ar = Array(9).fill(null);

function winner(){
    if(
        (ar[0] !== null && ar[1] == ar[1] && ar[2]) || 
        (ar[3] !== null && ar[4] == ar[4] && ar[5]) ||
        (ar[6] !== null && ar[7] == ar[7] && ar[8]) ||
        (ar[0] !== null && ar[3] == ar[3] && ar[6]) ||
        (ar[1] !== null && ar[4] == ar[4] && ar[7]) ||
        (ar[2] !== null && ar[5] == ar[5] && ar[8]) ||
        (ar[0] !== null && ar[4] == ar[4] && ar[8]) ||
        (ar[2] !== null && ar[4] == ar[4] && ar[6]) 
    ){
       document.write(`Winner is ${currentPlayer}`)
       return;
    }
    if(!ar.some((e)=>e === null)){
        document.write(`Draw !!!`);
        return;
    }
}
function handleClick(el){
    const id = Number(el.id)
    if(ar[id] !== null) return;
    ar[id] = currentPlayer;
    el.innerText = currentPlayer;
    winner()
    currentPlayer = currentPlayer === "X" ? "0" : "X";  
}


/*
// JavaScript code for the Tic Tac Toe game

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        updateCell(index);
        checkWinner();
        togglePlayer();
    }
}

function updateCell(index) {
    const cell = document.getElementById(`cell${index}`);
    cell.innerText = gameBoard[index];
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            displayWinner(gameBoard[a]);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        displayDraw();
    }
}

function displayWinner(winner) {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Player ${winner} wins!`;
    gameActive = false;
}

function displayDraw() {
    const resultElement = document.getElementById('result');
    resultElement.innerText = 'It\'s a draw!';
    gameActive = false;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    // Reset the display
    const resultElement = document.getElementById('result');
    resultElement.innerText = '';

    // Clear the game board
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(`cell${i}`);
        cell.innerText = '';
    }
}

// Create the game board dynamically
const boardElement = document.getElementById('board');
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell${i}`;
    cell.addEventListener('click', () => handleCellClick(i));
    boardElement.appendChild(cell);
}
