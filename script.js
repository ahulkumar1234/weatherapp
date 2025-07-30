
const apikey = "a04cd6de184cd14d0c87a933a255bd05";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".searchbtn button");
const weathericon = document.querySelector(".weathericon");
const container = document.querySelector(".container");
const errormsg = document.querySelector(".errormsg");
const weather = document.querySelector(".weather");

async function weathercheck(city) {
    let response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        errormsg.style.display = "block"
        weather.style.display = "none"

        setTimeout(() => {
            errormsg.style.display = "none";
        }, 5000);

    } else {
        let data = await response.json();
        document.querySelector(".cityname").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").textContent = data.main.humidity + " %";
        document.querySelector(".wind").textContent = data.wind.speed + " km/h";

        // Update icon
        if (data.weather[0].main === "Clouds") {
            weathericon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weathericon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weathericon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weathericon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Snow") {
            weathericon.src = "images/snow.png";
        } else if (data.weather[0].main === "Mist") {
            weathericon.src = "images/mist.png";
        } else {
            weathericon.src = "images/humidity.png";
        }
        errormsg.style.display = "none"
        weather.style.display = "block"
    }


    // if (data.weather[0].main === "Clear") {
    //     container.style.background = "linear-gradient(to right, #89f7fe, #66a6ff)";
    // } else if (data.weather[0].main === "Rain") {
    //     container.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
    // } else if (data.weather[0].main === "Clouds") {
    //     container.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
    // }


}
// Default weather 
// weathercheck("New Delhi");

// On button click
searchbutton.addEventListener("click", () => {
    weathercheck(searchbox.value);
});

