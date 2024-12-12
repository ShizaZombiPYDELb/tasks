const images = document.getElementById('randomImg');
const button = document.getElementById('randomButton');

const img = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
];


function randomImg() {
    const random = Math.floor(Math.random() * img.length);
    return img[random];
}

button.addEventListener("click", function() {
    images.src = randomImg();
});







