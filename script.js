let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function changeImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

setInterval(changeImage, 3000);

function scrollLeft() {
    document.getElementById('scroll-container').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('scroll-container').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

const loginPage = document.getElementById("login-page")
const loginBtn = document.getElementById("login-btn")

loginBtn.addEventListener("click",function(){
    loginPage.style.display="block"
})
