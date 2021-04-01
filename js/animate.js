function animate(ele, leftMax, callback) {
    window.clearInterval(ele.timer);
    ele.timer = window.setInterval(function () {
        // 速度逐渐变慢，步长公式 = （目标位置 - 当前位置）/ 10
        var step = (leftMax - ele.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (ele.offsetLeft === leftMax) {
            window.clearInterval(ele.timer);
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        } else {
            ele.style.left = ele.offsetLeft + step + 'px';
        }
    }, 15)
}