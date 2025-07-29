
const apikey = "a04cd6de184cd14d0c87a933a255bd05";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".searchbtn button");
const weathericon = document.querySelector(".weathericon");

async function weathercheck(city) {
    let response = await fetch(apiurl+ city +`&appid=${apikey}`);
    let data = await response.json();
    console.log(data)

    document.querySelector(".cityname").textContent = data.name
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").textContent = data.main.humidity + " %"
    document.querySelector(".wind").textContent = data.wind.speed + " km/h"
    
    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/rain.png"
    }
}
weathercheck();

searchbutton.addEventListener("click",()=>{
    weathercheck(searchbox.value);
});