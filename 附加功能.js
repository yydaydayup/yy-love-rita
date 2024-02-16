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


let audio = new Audio('天天 - 陶喆.mp3');
let playPauseBtn = document.getElementById('playPauseBtn');
let progressBar = document.getElementById('progressBar');

// 按钮点击事件：播放/暂停音乐
playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// 更新进度条
audio.addEventListener('timeupdate', function() {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// 存储播放状态，确保时刻都可控
let isPlaying = false;

audio.addEventListener('playing', function() {
    isPlaying = true;
});

audio.addEventListener('pause', function() {
    isPlaying = false;
});

// 进度条点击事件：改变音乐进度
progressBar.addEventListener('input', function() {
    let time = progressBar.value * audio.duration / 100;
    audio.currentTime = time;
});

// 你之前的星星生成函数以及其他代码保持不变
