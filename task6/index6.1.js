function removeChars(str, charsToRemove) {
    const charsArray = str.split('');

    const filteredChars = charsArray.filter(char => !charsToRemove.includes(char));

    return filteredChars.join('');
}

const inputString = prompt("Введіть рядок:");

const charsInput = prompt("Введіть символи для видалення (через кому):");

const charsToRemove = charsInput.split(',').map(char => char.trim());

if (inputString && charsToRemove.length > 0) {
    const result = removeChars(inputString, charsToRemove);
    console.log(`Результат: "${result}"`);
} else {
    console.log("Введено некоректні дані.");
}