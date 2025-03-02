const userName = prompt("Будь ласка, введіть ваше ім'я:");

if (userName) {
    alert(`Hello, ${userName}! How are you?`);
} else {
    alert("Hello, Guest! How are you?");
}