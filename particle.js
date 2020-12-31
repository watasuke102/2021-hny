// CopyRight (c) 2020 Watasuke
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT SUSHI-WARE License.

function rand(x) {
    return Math.floor(Math.random() * x);
}
const canvas  = document.getElementById('particle');
const context = canvas.getContext('2d');
const width   = window.innerWidth;
const height  = window.innerHeight;
canvas.setAttribute('width',  width);
canvas.setAttribute('height', height);
context.lineWidth = 3;

// 7秒ごとに1つずつパーティクルを追加する（最大10個）
// 開始直後に1つ追加される
const circle = [];
for (let i = 0; i < 10; i++){
    setTimeout(function () {
        circle.push({ x: rand(width), y: rand(height), size: 0, color:{r:0, g:0, b:0, a:1} });
    }, 7000*i);
}

loop();


function loop() {
    requestAnimationFrame(loop);
    context.clearRect(0, 0, width, height);
    for (obj of circle) {
        if (obj.color.a < 0) {
            obj.color.a = 1;
            obj.size    = 0;
            obj.x       = rand(width);
            obj.y       = rand(height);
            // 色を設定、暗すぎる（3要素の合計が90未満）と見えないので白色に強制変更
            obj.color.r = rand(255);
            obj.color.g = rand(255);
            obj.color.b = rand(255);
            if (obj.color.r + obj.color.g + obj.color.b < 90) {
                obj.color.r = 255;
                obj.color.g = 255;
                obj.color.b = 255;
            }
        } else {
            obj.size    += 0.5;
            obj.color.a -= 0.01;
        }
        context.beginPath();
        context.arc(obj.x, obj.y, obj.size, 0, 2*Math.PI);
        context.strokeStyle =
            'rgba('         +
            obj.color.r+',' +
            obj.color.g+',' +
            obj.color.b+',' +
            obj.color.a     +
            ')';
        context.stroke();
    }
}

