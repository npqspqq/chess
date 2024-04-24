
function possibleMove(){
    switch(selectedPiece){
        case 'wPawn':
            if(startR - 1 >= 0 && board[startR - 1][startC] === ""){
                let square = document.querySelector(`[r="${startR - 1}"][c="${startC}"]`)
                square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
            }
            if(startR - 2 >= 0 && board[startR - 2][startC] === "" && startR === 6){
                let square = document.querySelector(`[r="${startR - 2}"][c="${startC}"]`)
                square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
            }
            if(startR - 1 >= 0 && startC + 1 < 8 && board[startR - 1][startC + 1] !== ""){
                let square = document.querySelector(`[r="${startR - 1}"][c="${startC + 1}"]`)
                if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
            if(startR - 1 >= 0 && startC - 1 >= 0 && board[startR - 1][startC - 1] !== ""){
                let square = document.querySelector(`[r="${startR - 1}"][c="${startC - 1}"]`)
                
                if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
        break;
        case 'bPawn':
            if(startR + 1 < 8 && board[startR + 1][startC] === ""){
                let square = document.querySelector(`[r="${startR + 1}"][c="${startC}"]`)
                square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
            }
            if(startR + 2 < 8 && board[startR + 2][startC] === "" && startR === 1){
                let square = document.querySelector(`[r="${startR + 2}"][c="${startC}"]`)
                square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
            }
            if(startR + 1 < 8 && startC + 1 < 8 && board[startR + 1][startC + 1] !== ""){
                let square = document.querySelector(`[r="${startR + 1}"][c="${startC + 1}"]`)
                if(!square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                } 
            }
            if(startR + 1 < 8 && startC - 1 >= 0 && board[startR + 1][startC - 1] !== ""){
                let square = document.querySelector(`[r="${startR + 1}"][c="${startC - 1}"]`)
                if(!square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
        break;
        case 'wKnight':
        case 'bKnight':  
            if(startR + 2 < 8 && startC + 1 < 8 && board[startR + 2][startC + 1] !== undefined){
                let square = document.querySelector(`[r="${startR + 2}"][c="${startC + 1}"]`)
                console.log(square.firstChild)
                if(!square.firstChild){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
            if(startR + 2 < 8 && startC - 1 >= 0 && board[startR + 2][startC - 1] !== undefined){
                let square = document.querySelector(`[r="${startR + 2}"][c="${startC - 1}"]`)
                if(!square.firstChild){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
           
            if(startR - 2 >= 0 && startC + 1 < 8 && board[startR - 2][startC + 1] !== undefined){
                let square = document.querySelector(`[r="${startR - 2}"][c="${startC + 1}"]`)
                console.log(startR - 2, startC + 1)
                if(!square.firstChild){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
            if(startR - 2 >= 0 && startC - 1 >= 0 && board[startR - 2][startC - 1] !== undefined){
                let square = document.querySelector(`[r="${startR - 2}"][c="${startC - 1}"]`)
                if(!square.firstChild){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
            if(startR + 1 < 8 && startC + 2 < 8 && board[startR + 1][startC + 2] !== undefined){
                let square = document.querySelector(`[r="${startR + 1}"][c="${startC + 2}"]`)
                if(!square.firstChild){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
            if(startR - 1 >= 0 && startC + 2 < 8 && board[startR - 1][startC + 2] !== undefined){
                let square = document.querySelector(`[r="${startR - 1}"][c="${startC + 2}"]`)
                if(!square.firstChild){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
            if(startR + 1 < 8 && startC - 2 >= 0 && board[startR + 1][startC - 2] !== undefined){
                let square = document.querySelector(`[r="${startR + 1}"][c="${startC - 2}"]`)
                if(!square.firstChild){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }
            if(startR - 1 >= 0 && startC - 2 >= 0 && board[startR - 1][startC - 2] !== undefined){
                let square = document.querySelector(`[r="${startR - 1}"][c="${startC - 2}"]`)
                if(!square.firstChild){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green')
                }
            }   
        break;
        case "wRook":
        case "bRook":

            for(let row = startR + 1; row < 8; row++){
                let square = document.querySelector(`[r="${row}"][c="${startC}"]`)
                if(board[row][startC] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = 10;
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = 10;
                }
            }
            for(let row = startR - 1; row >= 0; row--){
                let square = document.querySelector(`[r="${row}"][c="${startC}"]`)
                if(board[row][startC] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = -10;
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = -10;
                }
            }
            for(let column = startC + 1; column < 8; column++){
                let square = document.querySelector(`[r="${startR}"][c="${column}"]`)
                if(board[startR][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    column = 10;
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    column = 10;
                }
            }
            for(let column = startC - 1; column >= 0; column--){
                let square = document.querySelector(`[r="${startR}"][c="${column}"]`)
                if(board[startR][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    column = -10;
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    column = -10;
                }
            }            
        break;
        case "wBishop":
        case "bBishop":

            for(let row = startR + 1, column = startC + 1;row < 8 && column < 8; row++, column++){
                let square = document.querySelector(`[r="${row}"][c="${column}"]`)
                if(board[row][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = 10
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = 10;
                }
            }
            for(let row = startR - 1, column = startC - 1;row >= 0 && column >= 0; row--, column--){
                let square = document.querySelector(`[r="${row}"][c="${column}"]`)
                if(board[row][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = -10
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = -10;
                }
            }
            for(let row = startR + 1, column = startC - 1;row < 8 && column >= 0; row++, column--){
                let square = document.querySelector(`[r="${row}"][c="${column}"]`)
                if(board[row][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = 10
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = 10;
                }
            }
            for(let row = startR - 1, column = startC + 1;row >= 0 && column < 8; row--, column++){
                let square = document.querySelector(`[r="${row}"][c="${column}"]`)
                if(board[row][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = -10
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = -10;
                }
            }
        break;
        case 'wQueen':
        case "bQueen":
                for(let row = startR + 1; row < 8; row++){
                let square = document.querySelector(`[r="${row}"][c="${startC}"]`)
                if(board[row][startC] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = 10;
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = 10;
                }
            }
            for(let row = startR - 1; row >= 0; row--){
                let square = document.querySelector(`[r="${row}"][c="${startC}"]`)
                if(board[row][startC] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = -10;
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = -10;
                }
            }
            for(let column = startC + 1; column < 8; column++){
                let square = document.querySelector(`[r="${startR}"][c="${column}"]`)
                if(board[startR][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    column = 10;
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    column = 10;
                }
            }
            for(let column = startC - 1; column >= 0; column--){
                let square = document.querySelector(`[r="${startR}"][c="${column}"]`)
                if(board[startR][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    column = -10;
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    column = -10;
                }
            }    
            for(let row = startR + 1, column = startC + 1;row < 8 && column < 8; row++, column++){
                let square = document.querySelector(`[r="${row}"][c="${column}"]`)
                if(board[row][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = 10
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = 10;
                }
            }
            for(let row = startR - 1, column = startC - 1;row >= 0 && column >= 0; row--, column--){
                let square = document.querySelector(`[r="${row}"][c="${column}"]`)
                if(board[row][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = -10
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = -10;
                }
            }
            for(let row = startR + 1, column = startC - 1;row < 8 && column >= 0; row++, column--){
                let square = document.querySelector(`[r="${row}"][c="${column}"]`)
                if(board[row][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = 10
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = 10;
                }
            }
            for(let row = startR - 1, column = startC + 1;row >= 0 && column < 8; row--, column++){
                let square = document.querySelector(`[r="${row}"][c="${column}"]`)
                if(board[row][column] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && square.firstChild.classList.contains(whosTurn)){
                    row = -10
                }else{
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                    row = -10;
                }
            } 
        break;   
        case 'wKing':
        case "bKing":
            if(startR - 1 >= 0 && startC - 1 >= 0){
                let square = document.querySelector(`[r="${startR - 1}"][c="${startC - 1}"]`)
                if(board[startR - 1][startC - 1] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }
            }  
            if(startR - 1 >= 0){
                let square = document.querySelector(`[r="${startR - 1}"][c="${startC}"]`)
                if(board[startR - 1][startC] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }
            }   
            if(startR - 1 >= 0 && startC + 1 < 8){
                let square = document.querySelector(`[r="${startR - 1}"][c="${startC + 1}"]`)
                if(board[startR - 1][startC + 1] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }
            }       
            if(startC - 1 >= 0){
                let square = document.querySelector(`[r="${startR}"][c="${startC - 1}"]`)
                if(board[startR][startC - 1] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }
            }    
            if(startC + 1 < 8){
                let square = document.querySelector(`[r="${startR}"][c="${startC + 1}"]`)
                if(board[startR][startC + 1] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }
            }    
            if(startR + 1 < 8 && startC - 1 >= 0){
                let square = document.querySelector(`[r="${startR + 1}"][c="${startC - 1}"]`)
                if(board[startR + 1][startC - 1] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }
            }    
            if(startR + 1 < 8){
                let square = document.querySelector(`[r="${startR + 1}"][c="${startC}"]`)
                if(board[startR + 1][startC] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }
            } 
            if(startR + 1 < 8 && startC + 1 < 8){
                let square = document.querySelector(`[r="${startR + 1}"][c="${startC + 1}"]`)
                if(board[startR + 1][startC + 1] === ""){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }else if(square.firstChild && !square.firstChild.classList.contains(whosTurn)){
                    square.classList.contains('gray') ? square.classList.add('light-green') : square.classList.add('dark-green');
                }
            }       
        break;
    }
}
