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
            let weathers = [];
            let clock = [];
            const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c693ecf6ae956538a12a29e6c29c3adc`);

            if (!weather.ok) {
                if (weather.status === 404) {
                    throw new Error(`Місто "${city}" не знайдено!`);
                } else {
                    throw new Error('Помилка запиту до API, спробуйте ще раз пізніше.');
                }
            }

            const data = await weather.json();

            if (!data.main || !data.weather || !data.main.temp) {
                throw new Error('Некоректні дані від API');
            }

            const temp = Math.floor(data.main.temp - 273);
            const humidity = data.main.humidity;
            const atmo = data.main.grnd_level;
            const wind_speed = data.wind.speed;
            const cloud = data.clouds.all;
            const temp_feels = Math.floor(data.main.feels_like - 273);
            const weather_icon = data.weather[0].icon;

            const time = new Date();
            const year = time.getFullYear();
            const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
            const month = months[time.getMonth()];
            const day = time.getDate();
            const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'];
            const weekday = days[time.getDay()];
            const hours = time.getHours();
            const minutes = time.getMinutes();

            clock.push(year, month, day, weekday, hours, minutes);
            weathers.push(temp, humidity, atmo, wind_speed, cloud, temp_feels, weather_icon);

            console.log(weathers);
            console.log(clock);

            const weatherContainer = document.getElementById("weatherInfo");
            weatherContainer.innerHTML = `
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

        widget();
    } catch (error) {
        console.log("Произошла ошибка:", error);
    }
});
