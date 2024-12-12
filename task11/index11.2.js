const button = document.getElementById('button');
const p = document.getElementById("p");

button.addEventListener('click', e => {
    if(p.style.color === 'black'){
        p.style.color = 'yellow';
    } else {
        p.style.color = 'black';
    }
})