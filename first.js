//花费充值的选择值变化
var hf=document.getElementById('huafei');
var cj=document.getElementById('chongzhi');
console.log(hf.innerHTML);
cj.setAttribute('onclick','change()');
function change(){
	var index=cj.selectedIndex;
	hf.innerHTML='¥'+cj.options[index].text;
}
//无缝轮播
  function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

  function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }
  		var box = document.getElementById('lb');
		var slider = document.getElementById('lbul');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var oNavlist = document.getElementById('nav').children;
		var index = 1; //打开页面生效的图片的下标为1
		var timer;
		var isMoving = false;
		box.onmouseover = function () {
			animate(left, {
				opacity: 0.6
			})
			animate(right, {
				opacity: 0.6
			})
			clearInterval(timer); //图片停止滚动
		}
		box.onmouseout = function () {
			animate(left, {
				opacity: 0
			})
			animate(right, {
				opacity: 0
			})
			timer = setInterval(next, 2000); //图片开始接着滚动
		}
		right.onclick = next;
		left.onclick = prev;

		function next() {
			if (isMoving) {
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider, {
				left: -805 * index
			}, function () {
				if (index == 7) {
					slider.style.left = '-803px';
					index = 1;
				}
				isMoving = false;
			});
		}

		function prev() {
			if (isMoving) {
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider, {
				left: -805 * index
			}, function () {
				if (index == 0) {
					slider.style.left = '-4830px';
					index = 5;
				}
				isMoving = false;
			});
		}
		//按钮点击切换事件
		for (var i = 0; i < oNavlist.length; i++) {
			oNavlist[i].index = i;
			oNavlist[i].onclick = function () {
				index = this.index + 1;
				navmove();
				animate(slider, {
					left: -805 * index
				});
			}

		}
		//图片切换时按钮样式跟着切换
		function navmove() {
			for (var i = 0; i < oNavlist.length; i++) {
				oNavlist[i].className = "";
			}
			if (index > 6) {
				oNavlist[0].className = "active";
			} else if (index <= 0) {
				oNavlist[5].className = "active";
			} else {
				oNavlist[index - 1].className = "active";
			}
		}
		//页面打开时自动滚动切换
		timer = setInterval(next, 2000);
//公告轮播：
var gg=document.getElementById('gg');//大的框架
var inx=1;
var Moving=false;
var tim;
console.log(gg);
function topg() {
			if (Moving) {
				return;
			}
			Moving = true;
			inx++;
			animate(gg, {
				top: -20* inx
			}, function () {
				if (inx ==16) {
					gg.style.top = '0px';
					inx = 1;
				}
				Moving = false;
			});
		}
gg.onmouseover = function () {
			
			clearInterval(tim); //图片停止滚动
		}
		gg.onmouseout = function () {
		
			tim = setInterval(topg, 20); //图片开始接着滚动
		}
tim = setInterval(topg,20);
//导航悬浮

window.onload=function(){
	var bn=document.getElementById('head1');
	window.onscroll=function(){
		var st=document.documentElement.scrollTop||document.body.scrollTop;
		console.log(st);
	if(st>100){
		bn.style.position='fixed';
	}
	else{
		bn.style.position='static';
	}
	}
}
//右侧悬浮窗

var box1=document.getElementById("box1");
var des=-80;
var timer;
box1.onmouseenter=function(){
timer = setInterval(function () {
			var now = parseInt(getStyle(box1, "left"));//去掉单位
			console.log(now);
			if (now == des) {
				clearInterval(timer);
			} else {
				box1.style.left = now -10 + "px";
				// now+=1;
			}
		}, 50);
// console.log(now);
}
box1.onmouseleave=function(){
	clearInterval(timer);
	box1.style.left = 0+ "px";
}

var box2=document.getElementById("box2");
var tsx;
console.log(box2);
box2.onmouseenter=function(){
tsx = setInterval(function () {
			var now = parseInt(getStyle(box2, "left"));//去掉单位
			console.log(now);
			if (now == -100) {
				clearInterval(tsx);
			} else {
				box2.style.left = now -10+ "px";
				// now+=1;
			}
		}, 50);
// console.log(now);
}
box2.onmouseleave=function(){
	clearInterval(tsx);
	box2.style.left = 0+ "px";
}

var box3=document.getElementById("box3");
var in3=document.getElementById("in3");
var inc=in3.children;
var time3;
console.log(box3);
box3.onmouseleave=function(){
	// console.log("&&");
	clearInterval(time3);
	box3.style.left = 0+ "px";
	in3.innerHTML='<img src="img/app.png"><img src="img/serwei.png" class="erw">';
	
}
box3.onmouseenter=function(){
time3 = setInterval(function () {
	inc[1].setAttribute("src","img/erwei.png");
	inc[1].setAttribute("class","de");
	// inc[0].style.(margin-left):7px;
	// inc[0].style.margin-top:0px;
			var now4 = parseInt(getStyle(box3, "left"));//去掉单位
			console.log(now4);
			if (now4 == -60) {
				clearInterval(time3);

			} else {
				box3.style.left = now4 -10 + "px";
				
				// now+=1;
			}
		}, 50);
// console.log(now);
}

var sx4=document.getElementById("sx4");
var simg4;
sx4.onmouseenter=function(){
simg4 = setInterval(function () {
			var now2 = parseInt(getStyle(sx4, "left"));//去掉单位
			console.log(now2);
			if (now2 == -80) {
				clearInterval(tsx);
			} else {
				sx4.style.left = now2 -10 + "px";
				// now+=1;
			}
		}, 50);
// console.log(now);
}
sx4.onmouseleave=function(){
	clearInterval(simg4);
	sx4.style.left = 0+ "px";
}





		
