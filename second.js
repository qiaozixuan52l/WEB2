
var m1=document.getElementById("div1");
var m2=document.getElementById("div2");
var ch=document.getElementById("ch");
console.log(m1);
m1.onclick=function(){
	m1.setAttribute('class','midp5');
	m1.innerHTML='150ml<img src="img/duigou.png">';
	m2.setAttribute('class','c2');
	m2.innerHTML="200ml";
	ch.innerHTML="150ml";
};
m2.onclick=function(){
	m1.setAttribute('class','c1');
	m2.setAttribute('class','midp51');
	m2.innerHTML='200ml<img src="img/duigou.png">';
	m1.innerHTML="150ml";
	ch.innerHTML="200ml";
};
//数量控制：
var l1=document.getElementById("l");
var shuliang=document.getElementById('shuliang');
var r1=document.getElementById('r');
console.log(l1);

l1.onmouseover=function(){
	if(shuliang.innerHTML=="1"){
			this.style.cursor="not-allowed";
			r1.style.cursor="default";
		}
}
r1.onmouseover=function(){
	if(shuliang.innerHTML=="5"){
			this.style.cursor="not-allowed";
			l1.style.cursor="default";
		}
}
l1.onclick=function(){
	if(shuliang.innerHTML=="1");
	else{

		this.style.cursor="default";
		shuliang.innerHTML=parseInt(shuliang.innerHTML)-1;
	}

}
r1.onclick=function(){
	if(shuliang.innerHTML=="5");
	else{
		this.style.cursor="default";
		shuliang.innerHTML=parseInt(shuliang.innerHTML)+1;
	}

}
var l2=document.getElementById("l2");
var r2=document.getElementById("r2");
var jp1=document.getElementById("jp1");
var jp2=document.getElementById("jp2");
var img1=document.getElementById("v");
var img2=document.getElementById("img2");
l2.onclick=function(){
	jp1.setAttribute("class","le1");
    jp2.setAttribute("class","le11");
    img1.setAttribute("src","img/pp0.jpeg");
    img2.setAttribute("src","img/pp0.jpeg");

}
jp1.onclick=function(){
	jp1.setAttribute("class","le1");
    jp2.setAttribute("class","le11");
    img1.setAttribute("src","img/pp0.jpeg");
    img2.setAttribute("src","img/pp0.jpeg");

}
jp2.onclick=function(){
	jp1.setAttribute("class","le11");
	jp2.setAttribute("class","le1");
    img1.setAttribute("src","img/pp1.jpeg");
    img2.setAttribute("src","img/pp1.jpeg");

}
r2.onclick=function(){
	jp1.setAttribute("class","le11");
	jp2.setAttribute("class","le1");
	img1.setAttribute("src","img/pp1.jpeg");
	img2.setAttribute("src","img/pp1.jpeg");

}
var slider = document.getElementById("slider");
var mid=document.getElementById("mid");
var midl=document.getElementById("midl");
var bf=document.getElementById("bf");
var big=document.getElementById("gaibian");



		console.log(img2);
		console.log(mid);
		console.log(midl);
		console.log(img1);
big.onmouseover = function () {
			slider.style.display = 'block';
			img2.style.display = 'block';
			bf.style.display = 'block';
			bf.style.left=mid.offsetLeft+big.offsetWidth+20+'px';
		}
big.onmouseout=function(){
	slider.style.display = 'none';
	img2.style.display = 'none';
	bf.style.display = 'none';
	bf.style.left=mid.offsetLeft+big.offsetWidth+20+'px';
}
big.onmousemove = function (ev) {
			var ev = ev || window.event;

			var oL = ev.clientX - slider.offsetWidth / 2;
			var oT = ev.clientY - slider.offsetHeight / 2+document.documentElement.scrollTop;
			
			
			var oMaxw = img1.offsetWidth - slider.offsetWidth+img1.offsetLeft;
			
			
			
				var oMaxh =img1.offsetHeight - slider.offsetHeight+img1.offsetTop;
		
			//+滚动条下移的最小距离 5
		
// console.log(midl.offsetTop);
			 oL = oL > oMaxw ? oMaxw : oL < img1.offsetLeft ? img1.offsetLeft : oL;//340
			 oT = oT > oMaxh ? oMaxh : oT < img1.offsetTop? img1.offsetTop : oT;

			slider.style.left = oL + 'px';
			slider.style.top = oT + 'px';
console.log(slider.style.left+"**");
			var scale = img2.offsetWidth/slider.offsetWidth;
			img2.style.left = -2* oL+190 +'px';
			img2.style.top =-2* oT+3*180+'px';
			console.log(img2.style.left+"&&&&");
			// console.log(scale);
		}
var all=document.getElementById("all");
var gw=document.getElementById("gw");
var beijing=document.getElementById("beijing");
gw.onclick=function(){
	all.style.opacity="0.7";
	beijing.style.display="block";
}

var tuichu=document.getElementById("tuichu");
tuichu.onclick=function(){
	all.style.opacity="1";
	beijing.style.display="none";
}










