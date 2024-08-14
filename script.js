const nextIcon = document.querySelector('.next');
const imageContainer = document.querySelector('.imageContainer');
const imgs = document.querySelectorAll('img');

let currentImg = 1;

nextIcon.addEventListener('click', () => {
    currentImg++; 
    updateImg();
});

function updateImg() {
    if (currentImg > imgs.length) {
        currentImg = 1;
    }
    imageContainer.style.transition = 'transform 0.5s ease-in-out'; // Geçiş animasyonu ekledik
    imageContainer.style.transform  = `translateX(-${(currentImg - 1) * 700}px)`;
}
