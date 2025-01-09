const apikey = "d840687809812c910d837b14db47a70b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  searchBox = document.querySelector('.search input');
const searchbtn = document.querySelector( '.search button' );
const WeatherIcon  = document.querySelector(".Wheather-icon");
async function checkWheather(city){
    const response = await  fetch(apiurl + city + `&appid=${apikey}`); 
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = ( Math.round(data.main.temp)+  '°C');
    document.querySelector(".humidity").innerHTML = (data.main.humidity +  '%');
    document.querySelector(".wind").innerHTML = (data.wind.speed +  ' km/h');

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "images/CLOUD.png";
    }else if(data.weather[0].main == "Rain"){
        WeatherIcon.src ="images/RAIN.png" ;
    }else if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "images/SUNNY.png";
    }else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "images/HAIL.png";
    }else if(data.weather[0].main == "Thunderstorm"){
        WeatherIcon.src = "images/LIGHTING.png";
    }else if(data.weather[0].main == "Snow"){
        WeatherIcon.src = "images/SNOW.png";
    }
    document.querySelector(".wheather").style.display = "block";
}    
searchbtn.addEventListener('click', ()=>{
    checkWheather(searchBox.value);
})
