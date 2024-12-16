// const but1 = document.getElementById("1");
// const but2 = document.getElementById("2");
// const but3 = document.getElementById("3");
//
// but1.addEventListener("click", (e) => {
//     alert("Була натиснута кнопка 1");
// });
//
// but2.addEventListener("click", (e) => {
//     alert("Була натиснута кнопка 2");
// });
//
// but3.addEventListener("click", (e) => {
//     alert("Була натиснута кнопка 3");
// });

function DOMforButton(el) {
    this.first = (e) => {
        alert("1");
    };
    this.second = (e) => {
        alert("2");
    };
    this.third = (e) => {
        alert("3");
    };

    this.onClick = (e) => {
        const action = e.target.id;

        if (action) this[action] (e);
    }

    el.onclick = this.onClick.bind(this);
}

const container = document.getElementById('all');
new DOMforButton(container);












