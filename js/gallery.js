
document.getElementById("nav-toggle").onclick = function () {
  document.getElementById("nav-links").classList.toggle("show");
};

const images = [
  "images/gallery1.jpg",
  "images/gallery2.jpg",
  "images/gallery3.jpg",
  "images/gallery4.jpg"
];

let index = 0;

function changeSlide() {
  const slide = document.getElementById("slide");
  index = (index + 1) % images.length;
  slide.src = images[index];
}

setInterval(changeSlide, 3000);

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}