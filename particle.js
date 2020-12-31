// CopyRight (c) 2020 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.

function rand(x) {
    return Math.floor(Math.random() * x);
}
const canvas = document.getElementById('particle');
console.log(canvas);
const context = canvas.getContext('2d');
const width   = window.innerWidth;
const height  = window.innerHeight;
canvas.setAttribute('width',  width);
canvas.setAttribute('height', height);

const circle = [];

// 7秒ごとに1つずつパーティクルを追加する（最大10個）
// 開始直後に1つ追加される
for (let i = 0; i < 10; i++){
    setTimeout(function () {
        circle.push({ x: rand(width), y: rand(height), size: 0, alpha: 1 });
    }, 7000*i);
}

loop();


function loop() {
    requestAnimationFrame(loop);
    context.clearRect(0, 0, width, height);
    for (obj of circle) {
        if (obj.alpha < 0) {
            obj.alpha = 1;
            obj.size  = 0;
            obj.x = rand(width);
            obj.y = rand(height);
        } else {
            obj.size  += 0.5;
            obj.alpha -= 0.01;
        }
        context.beginPath();
        context.arc(obj.x, obj.y, obj.size, 0, 2*Math.PI);
        context.strokeStyle = 'rgba(255,255,255,' + obj.alpha.toString() + ')';
        context.stroke();
    }
}

