/*
* @Author: Administrator
* @Date:   2017-09-18 17:32:21
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 21:59:12
*/
window.onload = function(){

let bannerlimg =document.getElementsByClassName('bannerlimg')[0];
let lii = bannerlimg.getElementsByTagName('li');
	let yuan=document.getElementsByClassName('yuan')[0];
	let a=yuan.getElementsByTagName('a');

	let bannerleft =document.getElementsByClassName('bannerleft')[0];
	let lis=bannerleft.getElementsByTagName('li');
	let item=document.getElementsByClassName('confot');

	for(let i=0;i<lis.length;i++){
		lis[i].onmousemove =function(){
			item[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}


//方法一
	  // for(i=0;i<bannerlimg.length;i++){
	  // 	bannerlimg[i].onclick = function(){

	  // 		for(let j=0;j<imgs;j++){
	  // 			imgs[j].style.display = 'none';
	  // 		}
	  // 		imgs[i].style.display = 'block';
	  // 	}
	  // }

//方法二
   let now = 0;
   for (let i=0;i<a.length;i++){
   	a[i].onclick = function(){
   		// lii[now].style.display = 'none';
   		// lii[i].style.display = 'block';
   		animate(lii[now],{opacity:0});
   		animate(lii[i],{opacity:1});
   		now=i;
   	}
   }

let num=0;
let t;
t=setInterval(move,3000);
function move(){
	num++;
	if(num == lii.length){
		num = 0;
	}
	for(let i=0;i<lii.length;i++){
		// lii[i].style.display = 'none';
		animate(lii[i],{opacity:0});
		a[i].style.background='#fff';
	}
	// lii[num].style.display = 'block';
	animate(lii[num],{opacity:1});
	a[num].style.background='#ff6600';
}




//鼠标移入停止
let stop =document.getElementsByClassName('banner')[0];
   stop= document.onmousemove = function(){
   	window.clearInterval(t);
   }
   stop= document.onmouseout = function(){
   	t=setInterval(move,3000);
   }

}


