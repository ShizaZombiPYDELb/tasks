function askForNumber() {
    let lastInput = null;

    for (let i = 0; i < 10; i++) {
        const userInput = prompt("Введіть число більше 100:");

        if (userInput === null || isNaN(userInput)) {
            console.log("Останнє введене значення:", lastInput);
            return;
        }

        const number = Number(userInput);

        if (number > 100) {
            console.log("Останнє введене значення:", number);
            return;
        } else {
            lastInput = number;
        }
    }

    console.log("Останнє введене значення:", lastInput);
}

askForNumber();



