const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather');
const forecast = document.querySelector('#forecast');



const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&appid=6ff51bf6263f4c73cabaafa2e9a3e51b&units=imperial';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=43.7&lon=-114.35&cnt=3&appid=9e819d2eb66d91130c863b8c2957f3ba&units=imperial'

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'An icon depicting the current weather');
    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    data.forEach(member => {
        const icon = document.createElement('img');
        const temp = document.createElement('p');

        icon.setAttribute('src',`https://openweathermap.org/img/wn/${member.list.weather[0].icon}@2x.png`);
        temp.textContent = member.list.temp.day;

        forecast.appendChild(icon);
        forecast.appendChild(temp);
    });
}

apiFetch(weatherURL);
apiFetch(forecastURL);