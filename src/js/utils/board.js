export function board(container) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement('input'); 
            cell.maxLength = 1; 
            cell.type = "text"
            cell.classList.add("aspect-square","border", "2xl:w-20", "lg:w-20","text-center")
            if (j % 3 === 0) cell.classList.add("border-l-3"); 
            if (j === 8) cell.classList.add("border-r-3"); 
            if (i % 3 == 0) cell.classList.add("border-t-3")
            if (i === 8) cell.classList.add("border-b-3"); 
            
            cell.addEventListener('keypress',(e) => {
        
                if (!(parseInt(e.key) <= 9 && parseInt(e.key) > 0)) {
                    e.preventDefault()
                }
            })
            container.appendChild(cell)
        }
    }

}