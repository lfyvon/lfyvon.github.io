const images = ["background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);