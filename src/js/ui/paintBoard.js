export function paintBoard(numberArray, cellsArray) {
    let delay = 0
    for (let i = 0; i < cellsArray.length; i++) {
        for (let j = 0; j < cellsArray[i].length; j++) {
            setTimeout(() => {
                cellsArray[i][j].value = numberArray[i][j]
                cellsArray[i][j].classList.add('bg-green-400')
            }, delay);
            delay = delay+100
        }
    }
}