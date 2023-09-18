const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('#image');
const caption = document.querySelector('#caption');
const changeMe = document.getElementById('ChangeMe');
let currentImageIndex = 1;


const imageFiles = ['Loc1.webp', 'Loc2.jpg', 'Loc3.jpg'];

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % imageFiles.length;
    const newImageSrc = imageFiles[currentImageIndex];
    image.src = newImageSrc;
   
    caption.style.opacity = 0;

    const ouchText = document.createElement('div');
    ouchText.textContent = 'Ouch!';
    ouchText.className = 'ouch-text'; 


    const imageRect = changeMe.getBoundingClientRect();
    ouchText.style.position = 'absolute';
    ouchText.style.left = `${imageRect.right}px`; 
    ouchText.style.top = `${imageRect.top}px`; 

    imageContainer.appendChild(ouchText);

    setTimeout(() => {
        ouchText.remove();
    }, 1500); 
}


imageContainer.addEventListener('click', changeImage);


changeMe.classList.add('shake');
