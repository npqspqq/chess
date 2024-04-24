function validMove(startR, endR, startC, endC, selectedPiece, board){
    
    if(startR === "" || endR === ""){
        return 
    }
    
    
    switch(selectedPiece){
        case "wPawn":
            if(
                board[endR][endC] === "" && endC === startC && startR - 1 === endR ||
                board[endR][endC] === "" && endC === startC && startR - 2 === endR && startR === 6 ||
                board[endR][endC] !== "" && endC === startC + 1 && startR - 1 === endR ||
                board[endR][endC] !== "" && endC === startC - 1 && startR - 1 === endR
            ){
                return true;
            }
        break;
        case "bPawn":
            if(
                board[endR][endC] === "" && endC === startC && startR + 1 === endR ||
                board[endR][endC] === "" && endC === startC && startR + 2 === endR && startR === 1 ||
                board[endR][endC] !== "" && endC === startC + 1 && startR + 1 === endR ||
                board[endR][endC] !== "" && endC === startC - 1 && startR + 1 === endR
            ){
                return true;
            }
        break;
        case "wKnight":
        case "bKnight":
            if(
                endC === startC + 1 && endR === startR + 2 || 
                endC === startC - 1 && endR === startR + 2 ||
                endC === startC + 1 && endR === startR - 2 || 
                endC === startC - 1 && endR === startR - 2 ||
                endC === startC + 2 && endR === startR + 1 ||
                endC === startC + 2 && endR === startR - 1 ||
                endC === startC - 2 && endR === startR + 1 ||
                endC === startC - 2 && endR === startR - 1 
            ){
                return true;
            }
        break;
        case "wRook":
        case "bRook":
            if(endR > startR && endC === startC){
                for(let row = startR + 1; row < endR; row++){
                    if(board[row][endC] !== ""){
                        return false
                    }
                }
                return true;
            }else if(endR < startR && endC === startC){
                for(let row = startR - 1; row > endR; row--){
                    if(board[row][endC] !== ""){
                        return false
                    }
                }
                return true
            }else if(endR === startR && endC > startC){
                for(let column = startC + 1; column < endC; column++){
                    if(board[endR][column] !== ""){
                        return false;
                    }
                }
                return true
            }else if(endR === startR && endC < startC){
                for(let column = startC - 1; column > endC; column--){
                    if(board[endR][column] !== ""){
                        
                        return false;
                    }
                }
                return true
            }
        break;
        case 'wBishop':
        case "bBishop":
            if(
                endR === startR + 1 && endC === startC + 1 ||
                endR === startR + 2 && endC === startC + 2 ||
                endR === startR + 3 && endC === startC + 3 ||
                endR === startR + 4 && endC === startC + 4 ||
                endR === startR + 5 && endC === startC + 5 ||
                endR === startR + 6 && endC === startC + 6 ||
                endR === startR + 7 && endC === startC + 7 
                
            ){
                let row = startR + 1
                let column = startC + 1
                while(row < endR){
                    if(board[row][column] !== ""){
                        return false
                    }
                    row++
                    column++
                }
                return true;
            }else if(
                endR === startR + 1 && endC === startC - 1 ||
                endR === startR + 2 && endC === startC - 2 ||
                endR === startR + 3 && endC === startC - 3 ||
                endR === startR + 4 && endC === startC - 4 ||
                endR === startR + 5 && endC === startC - 5 ||
                endR === startR + 6 && endC === startC - 6 ||
                endR === startR + 7 && endC === startC - 7 
                
            ){
                let row = startR + 1
                let column = startC - 1
                while(row < endR){
                    if(board[row][column] !== ""){
                        return false
                    }
                    row++
                    column--
                }
                return true;
            }else if(
                endR === startR - 1 && endC === startC + 1 ||
                endR === startR - 2 && endC === startC + 2 ||
                endR === startR - 3 && endC === startC + 3 ||
                endR === startR - 4 && endC === startC + 4 ||
                endR === startR - 5 && endC === startC + 5 ||
                endR === startR - 6 && endC === startC + 6 ||
                endR === startR - 7 && endC === startC + 7 
                
            ){
                let row = startR - 1
                let column = startC + 1
                while(column < endC){
                    if(board[row][column] !== ""){
                        return false
                    }
                    row--
                    column++
                }
                return true;
            }else if(
                endR === startR - 1 && endC === startC - 1 ||
                endR === startR - 2 && endC === startC - 2 ||
                endR === startR - 3 && endC === startC - 3 ||
                endR === startR - 4 && endC === startC - 4 ||
                endR === startR - 5 && endC === startC - 5 ||
                endR === startR - 6 && endC === startC - 6 ||
                endR === startR - 7 && endC === startC - 7 
            ){
                let row = startR - 1
                let column = startC - 1
                while(row > endR){
                    if(board[row][column] !== ""){
                        return false
                    }
                    row--
                    column--
                }
                return true;
            }
        break;
        case "wQueen":
        case "bQueen":
            if(endR > startR && endC === startC){
                for(let row = startR + 1; row < endR; row++){
                    if(board[row][endC] !== ""){
                        return false
                    }
                }
                return true;
            }else if(endR < startR && endC === startC){
                for(let row = startR - 1; row > endR; row--){
                    if(board[row][endC] !== ""){
                        return false
                    }
                }
                return true
            }else if(endR === startR && endC > startC){
                for(let column = startC + 1; column < endC; column++){
                    if(board[endR][column] !== ""){
                        return false;
                    }
                }
                return true
            }else if(endR === startR && endC < startC){
                for(let column = startC - 1; column > endC; column--){
                    if(board[endR][column] !== ""){
                        
                        return false;
                    }
                }
                return true
            }else if(
                endR === startR + 1 && endC === startC + 1 ||
                endR === startR + 2 && endC === startC + 2 ||
                endR === startR + 3 && endC === startC + 3 ||
                endR === startR + 4 && endC === startC + 4 ||
                endR === startR + 5 && endC === startC + 5 ||
                endR === startR + 6 && endC === startC + 6 ||
                endR === startR + 7 && endC === startC + 7 
                
            ){
                let row = startR + 1
                let column = startC + 1
                while(row < endR){
                    if(board[row][column] !== ""){
                        return false
                    }
                    row++
                    column++
                }
                return true;
            }else if(
                endR === startR + 1 && endC === startC - 1 ||
                endR === startR + 2 && endC === startC - 2 ||
                endR === startR + 3 && endC === startC - 3 ||
                endR === startR + 4 && endC === startC - 4 ||
                endR === startR + 5 && endC === startC - 5 ||
                endR === startR + 6 && endC === startC - 6 ||
                endR === startR + 7 && endC === startC - 7 
                
            ){
                let row = startR + 1
                let column = startC - 1
                while(row < endR){
                    if(board[row][column] !== ""){
                        return false
                    }
                    row++
                    column--
                }
                return true;
            }else if(
                endR === startR - 1 && endC === startC + 1 ||
                endR === startR - 2 && endC === startC + 2 ||
                endR === startR - 3 && endC === startC + 3 ||
                endR === startR - 4 && endC === startC + 4 ||
                endR === startR - 5 && endC === startC + 5 ||
                endR === startR - 6 && endC === startC + 6 ||
                endR === startR - 7 && endC === startC + 7 
                
            ){
                let row = startR - 1
                let column = startC + 1
                while(column < endC){
                    if(board[row][column] !== ""){
                        return false
                    }
                    row--
                    column++
                }
                return true;
            }else if(
                endR === startR - 1 && endC === startC - 1 ||
                endR === startR - 2 && endC === startC - 2 ||
                endR === startR - 3 && endC === startC - 3 ||
                endR === startR - 4 && endC === startC - 4 ||
                endR === startR - 5 && endC === startC - 5 ||
                endR === startR - 6 && endC === startC - 6 ||
                endR === startR - 7 && endC === startC - 7 
            ){
                let row = startR - 1
                let column = startC - 1
                while(row > endR){
                    if(board[row][column] !== ""){
                        return false
                    }
                    row--
                    column--
                }
                return true;
            }
        break;
        case "wKing":
        case "bKing":
            if(
                endR === startR - 1 && endC === startC - 1 ||
                endR === startR - 1 && endC === startC ||
                endR === startR - 1 && endC === startC + 1 ||
                endR === startR + 1 && endC === startC - 1 ||
                endR === startR + 1 && endC === startC ||
                endR === startR + 1 && endC === startC + 1 ||
                endR === startR && endC === startC - 1 ||
                endR === startR && endC === startC + 1 
            ){
                return true;
            }
        break;
    }  
}











