const number = parseInt(prompt("Введіть ціле число:"));
const outputElement = document.getElementById('output');

if (isNaN(number)) {
    outputElement.innerHTML = "<p>Введено некоректне число.</p>";
} else {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (isPrime(number)) {
        outputElement.innerHTML = `<p>${number} є простим числом.</p>`;
    } else {
        outputElement.innerHTML = `<p>${number} не є простим числом.</p>`;
    }
}