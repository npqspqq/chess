let board = [
    [bRook, bKnight, bBishop, bQueen, bKing, bBishop, bKnight, bRook],
    [bPawn, bPawn, bPawn, bPawn, bPawn, bPawn, bPawn, bPawn],
    ['', '', '', '', '', '', '', ''], 
    ['', '', '', '', '', '', '', ''], 
    ['', '', '', '', '', '', '', ''], 
    ['', '', '', '', '', '', '', ''],
    [wPawn, wPawn, wPawn, wPawn, wPawn, wPawn, wPawn, wPawn],
    [wRook, wKnight, wBishop, wQueen, wKing, wBishop, wKnight, wRook]
]

previousMovesArr = []

let whosTurn = "white"
let startR = ""
let startC = ""
let endR = ""
let endC = ""
let selectedPiece
let width = 8;

function updateBoard(board){
    for(let i = 0; i < board.length; i++){
        for(let x = 0; x < board[i].length; x++){
            document.querySelector(`[r="${i}"][c="${x}"]`).innerHTML = board[i][x]
        }
    }
}
updateBoard(board)

let squares = document.querySelectorAll('.square')

squares.forEach(square => square.addEventListener('click', onClick))

function onClick(e){
    endR = ''
    endC = ''
    let element;
    e.target.classList.contains('piece') ? element = e.target.parentNode : element = e.target;
    if(element.firstChild && element.firstChild.classList.contains(whosTurn)){
        squares.forEach(square => square.classList.remove('selected', 'light-green', 'dark-green'))
        element.classList.add('selected')
        selectedPiece = element.firstChild.id
        startR = parseInt(element.getAttribute('r'))
        startC = parseInt(element.getAttribute('c'))
        possibleMove()
    }else{
        endR = parseInt(element.getAttribute('r'))
        endC = parseInt(element.getAttribute('c'))
        if(validMove(startR, endR, startC, endC, selectedPiece, board)){
            board[endR][endC] = board[startR][startC]
            board[startR][startC] = ""
            if(selectedPiece === 'wPawn' && endR === 0){
                promote()
            }else if(selectedPiece === 'bPawn' && endR === 7){
                promote()
            }
            whosTurn === 'white' ? whosTurn = 'black' : whosTurn = 'white';
            previousMovesArr.push(board)
            updateBoard(board)
            startR = ""
            startC = ""
        }
        squares.forEach(square => square.classList.remove('selected', 'light-green', 'dark-green'))
        selectedPiece = ""
    }
}

function promote(){
    whosTurn === 'white' ? board[endR][endC] = wQueen : board[endR][endC] = bQueen;
}
