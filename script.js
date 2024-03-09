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

// 获取所有图库中的图片和放大显示器
const images = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
let currentIndex = 0;

// 打开放大显示器的函数
function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = images[index].src;
    lightbox.classList.remove('hidden');
}

// 关闭放大显示器
lightbox.addEventListener('click', function() {
    lightbox.classList.add('hidden');
});

// 为每张图片添加点击事件
images.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index));
});

// 添加左右按钮的事件
document.getElementById('prev').addEventListener('click', () => {
    if(currentIndex > 0) {
        openLightbox(currentIndex - 1);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if(currentIndex < images.length - 1) {
        openLightbox(currentIndex + 1);
    }
});

