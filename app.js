document.addEventListener('DOMContentLoaded', () => {

    const userGrid = document.querySelector('.user-gameBoard')
    const computerGrid = document.querySelector('.computer-gameBoard')
    const displayGrid = document.querySelector('.display-ships')
    const ships = document.querySelectorAll('.ship')
    const destroyer = document.querySelector('.destroyer')
    const submarine = document.querySelector('.submarine')
    const cruiser = document.querySelector('.cruiser')
    const battleship = document.querySelector('.battleship')
    const carrier = document.querySelector('.carrier')
    const startButton = document.querySelector('#start')
    const rotateButton = document.querySelector('#rotate')
    const turnDisplay = document.querySelector('#whose-go')
    const infoDisplay = document.querySelector('#info')
    const userSquares = []
    const computerSquares = []
    const width = 10

    // create board
    function createBoard(grid, squares) {
        for(let i = 0; i < width*width; i++){
            const square = document.createElement('div')
            square.dataset.id = i
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard(userGrid, userSquares)
    createBoard(computerGrid, computerSquares)
})