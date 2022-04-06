
const board = document.getElementById('board')
const square = document.querySelectorAll('.square')
const reset = document.getElementById('gameReset')
const message = document.getElementById('message')


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



const handleClick = (e,) => {
   const square = e.target
   const currentTurn = circleTurn ? playerCircle : playerX
   square.innerText = currentTurn
   placeMark(square, currentTurn)
   if (checkWin(currentTurn)) {
       endGame(false)
   } else if (isDraw()) {
       endGame(true)
   } else {
       swapTurns()
        
   }
//    console.log('this is the mark placed',placeMark)
}

const startGame = () => {
    circleTurn = false
    square.forEach(square => {
        square.removeEventListener('click', handleClick)
        square.addEventListener('click', handleClick, { once: true })
    })
    
    message.classList.remove('show')
}

startGame()

reset.addEventListener('click', function() {
    window.location.reload(true)
    console.log('clicked')
})

console.log('clicked', reset)



const endGame = (draw) => {
    if (draw) {
        message.innerText = 'Draw!'
    } else {
        message.innerText = `${circleTurn ? "O's" : "X's"} Wins!`

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
            return square[index].classList.contains(currentTurn)
            
        })
    })
}


