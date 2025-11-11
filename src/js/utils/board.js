export function board(container) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement('input'); 
            cell.maxLength = 1; 
            cell.type = "text"
            cell.classList.add("aspect-square","border", "w-12", "text-center")
            container.appendChild(cell)
        }
    }

}