const chessBoard = document.querySelector('#board')

function createBoard(){
    for(let i = 0; i < 8; i++){
        let row = document.createElement('div')
        row.setAttribute('row-id', i)
        row.classList.add('row')
        for(let x = 0; x < 8; x++){
            let square = document.createElement('div')
            square.setAttribute('r', i)
            square.setAttribute('c', x)
            square.classList.add('square')
            if(i % 2 === 0){
                square.classList.add(x % 2 === 0 ? 'brown' : 'gray')
            }else{
                square.classList.add(x % 2 === 0 ? 'gray' : 'brown')
            }
            row.append(square)
        }
        chessBoard.append(row)
    }
}

createBoard()