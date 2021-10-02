'use strict'
const images = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg'
]

const chosenImage = images[(Math.floor(Math.random() * images.length))];

console.log(chosenImage)

const bgimage = document.createElement("img");
bgimage.classList.add("bgimage");


bgimage.src = "./img/" + chosenImage

console.log(bgimage)

document.body.prepend(bgimage)