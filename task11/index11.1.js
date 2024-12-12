const rows = 10;
const cols = 10;

function tableOfPifagor(rows, cols) {
    const table = document.createElement('table');
    for (let i = 0; i <= rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j <= cols; j++) {
            const cell = i === 0 || j === 0 ? document.createElement('th') : document.createElement('td'); // Заголовки або дані
            cell.textContent = i === 0 ? j : j === 0 ? i : i * j;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    return table;
}

document.body.appendChild(tableOfPifagor(rows, cols));
