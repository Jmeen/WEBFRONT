'use strict'

// 유저의 위치 인식 Geology

function onGeoOK(position) {
  const lat = position.coords.latitude
  const lng = position.coords.longitude
  console.log("you live in", lat, lng)

}

function onGeoErr() {
  alert("can`t find you.")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
