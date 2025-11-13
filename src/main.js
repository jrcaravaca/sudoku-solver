import './style.css'
import { board } from './js/utils/board'; 
import { backtracking } from './js/utils/backtraking';
import {makeArrayFromBoard} from './js/utils/makeArrayFromBoard'; 
import {makeNumberArrayFromBoard} from './js/utils/makeNumberArrayFromBoard'


const sudokuGrid = document.getElementById('sudoku-grid'); 
const solveBtn = document.getElementById('solve-btn')
board(sudokuGrid); 

solveBtn.addEventListener('click', (e) => {
    e.preventDefault
    const numberArray = makeNumberArrayFromBoard()
    const cellsArray = makeArrayFromBoard()
    backtracking(numberArray)
    
    console.log(numberArray)
})