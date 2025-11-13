export function isValid(board, row, col, num) {
    let fila = board[row] 
    let filaCuadrante = Math.floor(row / 3) * 3; 
    let columnaCuadrante = Math.floor(col / 3) * 3; 
    let valid; 

    // fila
    for (let i = 0; i < fila.length; i++) {
        if (num === fila[i]) {
            return false; 
        }
    }

    //columna
    for (let i = 0; i < board.length; i++) {
        if (num === board[i][col]) {
            return false; 
        }
    }

    //cuadrante
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++ ){
            if (num === board[filaCuadrante + i][columnaCuadrante + j]) {
                return false
            }
        } 
    }

    return true
}   