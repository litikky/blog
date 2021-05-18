/*
 * @Description: 
 * @Author: liyaoyao
 * @Date: 2021-04-01 22:37:05
 * @LastEditTime: 2021-04-24 14:03:11
 */
window.addEventListener('load', function() {
    var focusBox = document.querySelector('.focus');
    var focusWidth = focusBox.offsetWidth;
    var arrowL = focusBox.querySelector('.arrow-l');
    var arrowR = focusBox.querySelector('.arrow-r');
    var circle = focusBox.querySelector('.circle');
    var imgUl = focusBox.querySelector('ul');
    var circleIndex = 0;
    var imgIndex = 0;

    function changeCircle() {
        circleIndex = circleIndex % (circle.children.length);
        circleIndex = circleIndex < 0 ? circle.children.length - 1 : circleIndex;
        for (var j = 0; j < circle.children.length; j++) {
            circle.children[j].className = '';
        }
        circle.children[circleIndex].className = 'current';
    }
    // 1. 鼠标经过时-显示；离开-隐藏
    focusBox.addEventListener('mouseenter', function() {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
        // 鼠标经过时，取消自动播放
        clearInterval(timer);
        timer = null;
    })

    focusBox.addEventListener('mouseleave', function() {
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
        timer = setInterval(function() {
            arrowR.click();
        }, 2000)
    })

    // 2.自动生成小圆圈
    for (var i = 0; i < imgUl.children.length; i++) {
        var li = document.createElement('li');
        circle.append(li);
        li.setAttribute('index', i);
        // 3.点击小圆圈后，改变状态
        li.addEventListener('click', function() {
            // 4. 点击小圆圈，改变图片位置
            circleIndex = parseInt(this.getAttribute('index'));
            changeCircle();
            imgIndex = circleIndex;

            animate(imgUl, - focusWidth * circleIndex);
        })
    }
    circle.children[circleIndex].className = 'current'; 

    
    // 4. 点击左右按钮，改变图片位置
    var first = imgUl.children[0].cloneNode(true); // 深克隆
    var flag = true; // 流量阀flag
    imgUl.append(first);
    // 右箭头
    arrowR.addEventListener('click', function() {
        flag = false;
        if (imgIndex === imgUl.children.length - 1) {
            imgUl.style.left = 0;
            imgIndex = 0;
        }
        imgIndex++;
        circleIndex++;
        changeCircle();
        animate(imgUl, - focusWidth * imgIndex, function() {
            flag = true;
        });
    })
    // 左箭头
    arrowL.addEventListener('click', function() {
        if (imgIndex === 0) {
            flag = false;
            imgIndex = imgUl.children.length - 1;
            imgUl.style.left = - imgIndex * focusWidth + 'px';
        }
        imgIndex--;
        circleIndex--;
        changeCircle();
        animate(imgUl, - focusWidth * imgIndex, function() {
            flag = true;
        });
    })

    // 5. 自动播放，鼠标经过时则停止
    var timer = setInterval(function() {
        arrowR.click();
    }, 2000)
})