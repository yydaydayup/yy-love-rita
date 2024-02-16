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



