const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const description = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=63a5366e39ea031f1d1dfca52da22c5d";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();

const displayWeather = (data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", desc)
    description.textContent = `${desc}`
}

const url2 = `https://ll.thespacedevs.com/2.2.0/agencies/?limit=15&ordering=-total_launch_count&mode=detailed&format=json`;

async function name() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
            console.log(error)
        }
    
}

name();