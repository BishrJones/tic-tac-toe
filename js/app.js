
const board = document.getElementById('board')
const square = document.querySelectorAll('.square')
const reset = document.getElementById('gameReset')
const message = document.getElementById('message')

let gameEnd = false
let circleTurn
const playerX = 'x'
const playerCircle = 'o'
const winningCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]









reset.addEventListener('click', function() {
    window.location.reload(true)
    console.log('clicked')
})

console.log('clicked', reset)



const endGame = (draw ) => {
    // const square = e.target
    if (draw) {
        gameEnd = true
        message.innerText = 'Draw!'
        console.log(gameEnd)
    } else {
        gameEnd = true
        message.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
        console.log(gameEnd)
    }
    
}

const isDraw = () => {
    return [...square].every(square => {
        return square.classList.contains(playerX) || square.classList.contains(playerCircle)
    })
}
const placeMark = (square, currentTurn) => {
    
    if (checkWin === true){
        return square.innerText = ''
    }else{
        square.classList.add(currentTurn)
    }
}



const swapTurns = () => {
    circleTurn = !circleTurn
}


const checkWin = (currentTurn) => {
    return winningCombs.some(combination => {
        return combination.every(index => {
            // square.innerText = ''
            return square[index].classList.contains(currentTurn)
        })
    })
}


const handleClick = (e) => {
    const currentTurn = circleTurn ? playerCircle : playerX
    const square = e.target
    if (!gameEnd) {
            square.innerText = currentTurn
            placeMark(square, currentTurn)
            if (isDraw()) {
            // endGame(true)
             //    square.innerText = ''
            } else if (checkWin(currentTurn)) {
             endGame(false)
                 if (square) {
                     square.classList.add(currentTurn)
                    //  square.innerText =  gameEnd
                     console.log (square.innerText)
                     console.log(square)
                 }
             } else {
                swapTurns()
                 
            }
            
        }
    //    console.log('this is the mark placed',placeMark)
    }
    const startGame = () => {
        circleTurn = false
        square.forEach(square => {
            if (gameEnd) {
                square.removeEventListener('click', handleClick)
            }else {
                square.addEventListener('click', handleClick, { once: true })
            }
        })
        
        
    }
    startGame()

// const endOfGame = () => {
//     if (gameEnd) {
//         square.forEach(square => {
//             square.removeEventListener('click', handleClick)
//             // square.addEventListener('click', handleClick, { once: true })
//         })
//     } else {

//     }
// }
