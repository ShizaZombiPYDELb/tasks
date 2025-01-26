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

function renderWeather(data) {
    const weatherContainer = document.getElementById("weatherInfo");

    while (weatherContainer.firstChild) {
        weatherContainer.removeChild(weatherContainer.firstChild);
    }

    const title = document.createElement("h2");
    title.textContent = `Погода в місті ${data.city}`;
    weatherContainer.appendChild(title);

    const temp = document.createElement("p");
    temp.textContent = `Температура: ${data.temp}°C`;
    weatherContainer.appendChild(temp);

    const humidity = document.createElement("p");
    humidity.textContent = `Вологість: ${data.humidity}%`;
    weatherContainer.appendChild(humidity);

    const wind = document.createElement("p");
    wind.textContent = `Швидкість вітру: ${data.wind_speed} м/с`;
    weatherContainer.appendChild(wind);

    const cloudiness = document.createElement("p");
    cloudiness.textContent = `Облаковість: ${data.cloud}%`;
    weatherContainer.appendChild(cloudiness);

    const tempFeels = document.createElement("p");
    tempFeels.textContent = `Температура відчувається як: ${data.temp_feels}°C`;
    weatherContainer.appendChild(tempFeels);

    const icon = document.createElement("img");
    icon.src = `http://openweathermap.org/img/wn/${data.weather_icon}.png`;
    icon.alt = "weather icon";
    weatherContainer.appendChild(icon);

    const date = document.createElement("p");
    date.textContent = `Дата: ${data.weekday}, ${data.day} ${data.month} ${data.year}`;
    weatherContainer.appendChild(date);

    const time = document.createElement("p");
    time.textContent = `Час: ${data.hours}:${data.minutes < 10 ? "0" + data.minutes : data.minutes}`;
    weatherContainer.appendChild(time);
}

