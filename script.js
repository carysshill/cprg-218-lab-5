document.addEventListener('DOMContentLoaded', function () {
    fetchWeatherData();
    document.getElementById('city-select').addEventListener('change', fetchWeatherData);
});

function fetchWeatherData() {
    const apikey = 'a9d3b0bbc880ce9771a04bafac0bc2d0';
    const city = document.getElementById('city-select').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => console.error('Error fetching data: ', error));
}

function displayWeather(data) {
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    if (data && data.weather && data.main) {
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
    } else {
        temperature.textContent = 'Weather data not available';
    }
}
