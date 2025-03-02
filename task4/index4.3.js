const birthYear = prompt("Будь ласка, введіть ваш рік народження:");

if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    const city = prompt("В якому місті ви живете?");

    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто проживання.");
    } else {
        const sport = prompt("Який ваш улюблений вид спорту?");

        if (sport === null) {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        } else {
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthYear;

            let cityMessage;
            switch (city) {
                case "Київ":
                    cityMessage = "Ти живеш у столиці України.";
                    break;
                case "Вашингтон":
                    cityMessage = "Ти живеш у столиці США.";
                    break;
                case "Лондон":
                    cityMessage = "Ти живеш у столиці Великобританії.";
                    break;
                default:
                    cityMessage = `Ти живеш у місті ${city}.`;
            }

            let sportMessage = "";
            switch (sport) {
                case "футбол":
                    sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
                    break;
                case "теніс":
                    sportMessage = "Круто! Хочеш стати як Серена Вільямс?";
                    break;
                case "баскетбол":
                    sportMessage = "Круто! Хочеш стати як Леброн Джеймс?";
                    break;
                default:
                    sportMessage = `Твій улюблений вид спорту - ${sport}.`;
            }

            alert(`
                Ваш вік: ${age} років.
                ${cityMessage}
                ${sportMessage}
            `);
        }
    }
}