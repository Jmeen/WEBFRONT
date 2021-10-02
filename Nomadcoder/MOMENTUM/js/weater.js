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

    cityContainer.innerText = data.name;
    wetherContainer.innerText = `${data.weather[0].main}/${data.main.temp}`;
  })
}

function onGeoErr() {
  alert("can`t find you.")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
