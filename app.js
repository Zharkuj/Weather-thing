// fetch("http://127.0.0.1:5500/lab15/book.html").then(
//     response => response.json()
    
// ).then(
//     data => {
//         console.log(data.book[0].author);
//     }

// )

// fetch("http://127.0.0.1:5500/lab15/h.html").then(
//     response1 => response1.json()
    
// ).then(
//     data1 => {
//         console.log(data1.h[0].g);
//     }

// )

const button = document.querySelector(".button-search");
const inputrr = document.querySelector(".inputr");
const temperatures = document.querySelector(".temperatures");
const weather = document.querySelector(".weather");
const windspeedr = document.querySelector(".windspeedr");
const humidness = document.querySelector(".humiditine");
const windspeedrlabel = document.querySelector(".windspeedr-label");
const humidnesslabel = document.querySelector(".humiditine-label");
const imager = document.getElementsByTagName("img")[0];
console.log(inputrr)




button.addEventListener("click", ()=>{
    let city = inputrr.value;
    console.log(city)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
    response => response.json()

).then(
    data => {
        if(data.cod==404){
            imager.src="404.png"
            imager.style.marginTop=("50px");
            temperatures.innerText="Invalid location";
            weather.innerText="Make sure to make no spelling mistakes!";
            windspeedr.innerText=("?km/hour");
            humidness.innerText=("?%");
            indspeedrlabel.innerText=("Wind speed");
            humidnesslabel.innerText=("Humidity");


        }
        
        else if(data.cod==400){
            imager.src="404.png"
            imager.style.marginTop=("50px");
            temperatures.innerText="No location";
            weather.innerText="Make sure to make input a country or city!";
            windspeedr.innerText=("?km/hour");
            humidness.innerText=("?%");
            indspeedrlabel.innerText=("Wind speed");
            humidnesslabel.innerText=("Humidity");


        }
        
        else{
            console.log(data.cod)
        // console.log(Math.floor(data.main.temp));
        // console.log(data.weather[0].main);
        // console.log(Math.floor(data.main.humidity));
        // console.log(Math.floor(data.wind.speed));
        temperatures.innerText=(Math.floor(data.main.temp) + "°C");
        weather.innerText=(data.weather[0].description);
        windspeedr.innerText=(Math.floor(data.wind.speed) + "km/hour");
        humidness.innerText=(Math.floor(data.main.humidity) + "%");
        windspeedrlabel.innerText=("Wind speed");
        humidnesslabel.innerText=("Humidity");

        imager.style.marginTop=("0");
        imager.style.height=("50%");

        if(data.weather[0].main=="Clouds"){
            imager.src="cloud.png"
        }else if(data.weather[0].main=="Thunderstorm"){
            imager.src="thunder.png"
        }else if(data.weather[0].main=="Clear"){
            imager.src="clear.png"
        }else if(data.weather[0].main=="Mist"){
            imager.src="mist.png"
        }else if(data.weather[0].main=="Rain"){
            imager.src="rain.png"
        }
        
    }
        }

        
)




})
