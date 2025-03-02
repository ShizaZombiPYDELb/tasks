const N = parseInt(prompt("Введіть ціле число N:"));

if (isNaN(N)) {
    console.log("Введено некоректне число.");
} else {
    console.log(`Числа від 1 до 100, квадрат яких не перевищує ${N}:`);

    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
        }
    }
}