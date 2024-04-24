let next = document.querySelector('#next-move')
let previous = document.querySelector('#previous-move')




function previousMove(){
    let currentMove = previousMovesArr.length - 1;
    if(currentMove > 0){
        currentMove--
    }
    console.log(previousMovesArr[currentMove])
    updateBoard(previousMovesArr[currentMove])
    
}
function nextMove(){
    let lastMove = previousMovesArr.length - 1;
    let currentMove = previousMovesArr.length - 1;
    if(currentMove < lastMove){
        currentMove++
    }
    
}

next.addEventListener('click', nextMove)
previous.addEventListener('click', previousMove)