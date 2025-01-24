const button_reset = document.getElementById("getWeather");
const cityInput = document.getElementById("city");

button_reset.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (!city) {
        alert("Будь ласка, введіть назву міста!");
        return;
    }

    try {
        async function widget() {
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c693ecf6ae956538a12a29e6c29c3adc`);

            if (!weatherResponse.ok) {
                if (weatherResponse.status === 404) {
                    throw new Error(`Місто "${city}" не знайдено!`);
                } else {
                    throw new Error('Помилка запиту до API, спробуйте ще раз пізніше.');
                }
            }

            const weatherData = await weatherResponse.json();

            if (!weatherData) {
                throw new Error('Некоректні дані від API');
            }

            const data = {
                city: city,
                temp: Math.floor(weatherData.main.temp - 273),
                humidity: weatherData.main.humidity,
                wind_speed: weatherData.wind.speed,
                cloud: weatherData.clouds.all,
                temp_feels: Math.floor(weatherData.main.feels_like - 273),
                weather_icon: weatherData.weather[0].icon,
                weekday: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'][new Date().getDay()],
                day: new Date().getDate(),
                month: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'][new Date().getMonth()],
                year: new Date().getFullYear(),
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
            };

            renderWeather(data);
        }

        widget();
    } catch (error) {
        console.error("Произошла ошибка:", error);
        alert(error.message);
    }
});

function prepareWeather(data) {
    const { city, temp, humidity, wind_speed, cloud, temp_feels, weather_icon, weekday, day, month, year, hours, minutes } = data;

    return `
        <h2>Погода в місті ${city}</h2>
        <p>Температура: ${temp}°C</p>
        <p>Вологість: ${humidity}%</p>
        <p>Швидкість вітру: ${wind_speed} м/с</p>
        <p>Облаковість: ${cloud}%</p>
        <p>Температура відчувається як: ${temp_feels}°C</p>
        <img src="http://openweathermap.org/img/wn/${weather_icon}.png" alt="weather icon" />
        <p>Дата: ${weekday}, ${day} ${month} ${year}</p>
        <p>Час: ${hours}:${minutes < 10 ? "0" + minutes : minutes}</p>
    `;
}

function renderWeather(data) {
    const weatherContainer = document.getElementById("weatherInfo");
    const weatherHTML = prepareWeather(data);
    weatherContainer.innerHTML = weatherHTML;
}
