// 轮播图js
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.track');
    const images = document.querySelectorAll('.header-img');
    const prevButton = document.querySelector('.carousel-button.left');
    const nextButton = document.querySelector('.carousel-button.right');
    const nav = document.querySelector('.carousel-nav');
    const imageWidth = images[0].clientWidth;
    
    let currentIndex = 0;

    // 创建小圆点
    images.forEach((_, index) => {
        const button = document.createElement('button');
        if (index === 0) button.classList.add('active'); // 默认第一个激活
        nav.appendChild(button);
    });

    const dots = Array.from(nav.children);

    function updateCarousel(index) {
        const offset = -index * imageWidth;
        track.style.transform = `translateX(${offset}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // 更新索引并限制范围
    function updateIndex(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        updateCarousel(currentIndex);
    }

    // 点击箭头切换图片
    prevButton.addEventListener('click', () => updateIndex(-1));
    nextButton.addEventListener('click', () => updateIndex(1));

    // 点击小圆点切换图片
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(index);
        });
    });
});
// 通知栏js
window.onload = function(argument){
	// alert('加载完成');
	document.querySelector('.contentTxt').style.display = "block";

}
function mOver(arg){
	let aEle = document.getElementsByClassName('contentTxt');
	for (var i = aEle.length - 1; i >= 0; i--) {
		aEle[i].style.display = "none";
	}

	if(arg == 0){
		let myele = document.querySelectorAll('.title a')[0];
		myele.style.borderLeftColor = "#eee";
	}
	if(arg == 4){
		let myele = document.querySelectorAll('.title a')[4];
		myele.style.borderRightColor = "#eee";
	}
	aEle[arg].style.display = "block";
	// 在js里面操作css

}
document.querySelectorAll('.title a').forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        // 隐藏所有内容
        document.querySelectorAll('.contentTxt').forEach(function(content) {
            content.classList.remove('active');
        });

        // 显示点击的标签对应的内容
        document.getElementById('content' + (index + 1)).classList.add('active');

        // 更新标题栏的高亮效果
        document.querySelectorAll('.title a').forEach(function(link) {
            link.classList.remove('active');
        });
        tab.classList.add('active');
    });
});

