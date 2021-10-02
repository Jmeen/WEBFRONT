'use strict'

// 유저의 위치 인식 Geology
const API_KEY = "bdcc833e8b82df35fb9715eb0def8602";


function onGeoOK(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(reponse => reponse.json()).then(data=>{

    const wetherContainer = document.querySelector("#weather span:first-child")
    const cityContainer = document.querySelector("#weather span:last-child")
    const name = data.name;
    const weather = data.weather[0].main;
    console.log(name, weather)
    // weatherIcon(weather);

    cityContainer.innerText = "@"+data.name;
    wetherContainer.innerText = `${Math.round(data.main.temp)}°C`;
  })
}

function onGeoErr() {
  alert("can`t find you.")
}

// function weatherIcon(weather){
//   const whetherIcon = document.querySelector("#whetherIcon")
//   if (weather==="clear sky")
//   whetherIcon.innerHTML='<i class="fas fa-sun"></i>';
//   else if (weather==="few clouds")
//   whetherIcon.innerHTML='<i class="fas fa-cloud-sun"></i>';
//   else if (weather==="Clouds")
//   whetherIcon.innerHTML='<i class="fas fa-cloud"></i>';
//   else if (weather==="scattered clouds")
//   whetherIcon.innerHTML='<i class="fas fa-cloud"></i>';
//   else if (weather==="broken clouds")
//   whetherIcon.innerHTML='<i class="fas fa-cloud"></i>';
//   else if (weather==="shower rain")
//   whetherIcon.innerHTML='<i class="fas fa-cloud-showers-heavy"></i>';
//   else if (weather==="rain")
//   whetherIcon.innerHTML='<i class="fas fa-cloud-showers-heavy"></i>';
//   else if (weather==="thunderstorm")
//   whetherIcon.innerHTML='<i class="fas fa-poo-storm"></i>';
//   else if (weather==="snow")
//   whetherIcon.innerHTML='<i class="fas fa-poo-storm"></i>';
//   else if (weather==="mist")
//   whetherIcon.innerHTML='<i class="fas fa-smog"></i>';

// }



navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
