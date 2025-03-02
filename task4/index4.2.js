const userInput = prompt("Будь ласка, введіть тризначне число:");

if (userInput && userInput.length === 3 && !isNaN(userInput)) {
    const number = userInput;

    const digit1 = number[0];
    const digit2 = number[1];
    const digit3 = number[2];

    const allDigitsSame = digit1 === digit2 && digit2 === digit3;
    console.log(`Чи всі цифри однакові? ${allDigitsSame}`);

    const hasSameDigits = digit1 === digit2 || digit1 === digit3 || digit2 === digit3;
    console.log(`Чи є серед цифр однакові? ${hasSameDigits}`);
} else {
    console.log("Введено некоректне тризначне число.");
}