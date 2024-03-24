// 创建星星并添加到body中
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationName = 'fall';
    document.body.appendChild(star);
    
    // 一段时间后移除星星
    setTimeout(() => {
        star.remove();
    }, star.style.animationDuration.replace('s', '') * 1000);
}
// 每隔一段时间创建一个新星星
setInterval(createStar, 300);

let slideIndex = 0;  
showSlides();  
  
function showSlides() {  
    let i;  
    let slides = document.getElementsByClassName("image-container");  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "inline-block";  
    }  
}  
  
function openLightbox(index) {  
    slideIndex = index;  
    document.getElementById("lightbox").style.display = "block";  
    document.getElementById("lightbox-image").src = document.getElementsByClassName("gallery-image")[slideIndex - 1].src;  
}  
  
function changeSlide(n) {  
    showSlides();  
    let slides = document.getElementsByClassName("gallery-image");  
    if (n > 0 && slideIndex < slides.length) {  
        slideIndex++;  
    }  
    if (n < 0 && slideIndex > 1) {  
        slideIndex--;  
    }  
    document.getElementById("lightbox-image").src = slides[slideIndex - 1].src;  
}

