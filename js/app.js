const board = document.querySelector('#board')
const squares = document.querySelectorAll('.squares')
const reset = document.querySelector('#reset')
const message = document.querySelector('#message')

// set varibles for the current player
let firstPlayer = 'X'
    // set a a varible as a boolean to use later to make sure no squares cann be used aafter the game is no longer active
let activeGame = true
    // make an array for the nine empty squares on the board
let emptyboard = ['', '', '', '', '', '', '', '', '']


// make a function that list all of the possible winning combinations in arrays
// the array numbers are based on the placement of the squares, 0 starting in the left upper corner and the number goes up to the right
const winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
console.log('these are all of the winning combinations', winningComb)

// create game variables for game conditions, either player wins or there is a tie
const xWins = 'xWins'
const oWins = 'oWins'
const tie = 'tie'


// make X and O variables

// make the reset button reset the entire board
const clearBoard = () => {
        // if there is a child on the board, remove it 
        while (board.firstChild) {
            board.removeChild(board.firstChild)
        }
    }
    // add an event listner for anytime the DOM content is loaded the all for a game reset 
document.addEventListener('DomContentLoaded', () => {
    reset.addEventListener('click', clearBoard)
})