/*
var FxSLide = function(){
	function FxSlide(){

	}
	return FxSlide;
}) ();

//사용자가 쓰는 법
 var obj = {
	slides : $(".slides"),//필수 
	speed : 500, //애니메이션 속도
	delay : 3000, //딜레이
	cnt : 5 //화면에 보이는 갯수(이미지)
	prev : $(".pager-prev"),
	next : $(".pager-next"),
} 
var slide1 = new.Fxslide(obj);
*/
var FxSlide = (function(){
	function FxSlide(obj){
		this.now = 0;
		this.slides = $(obj.slides); //없으면 돌아가지 않음.
		this.prev = obj.prev ? $(obj.prev):$(".pager-prev"); 
		this.next = obj.next ? $(obj.next):$(".pager-next"); 
		this.slide = this.slides.children();
		this.len = this.slide.length;
		this.cnt = obj.cnt ? Number(obj.cnt) : 1;
		this.speed = obj.speed ? Number(obj.speed) : 500;
		this.delay = obj.delay ? Number(obj.delay) : 3000;
		this.tar = 100 / this.cnt;
		this.width = this.tar*2+100; //container width값
		this.dir = -1;
		this.interval = null;
		this.arr = [];
		this.startInit(this);
		this.init(); //this->FxSlide
		this.interval = setInterval(this.ani,this.delay,this);//Window
	}
	FxSlide.prototype.startInit = function(obj){
		obj.prev.click(function(e){
			obj.dir = 0;
			obj.ani(obj);
		});
		obj.next.click(function(e){
			obj.dir = -1;
			obj.ani(obj);
		});
		obj.slides.mouseover(function(){
			clearInterval(obj.interval);
		}).mouseleave(function(){
			clearInterval(obj.interval);
			obj.interval = setInterval(obj.ani, obj.delay, obj);
	});
}
	FxSlide.prototype.init = function(){
// console.log(this);
	this.arr=[];
		this.arr.push((this.now ==0) ? this.len - 1 : this.now - 1);//왼쪽 (prev)
		this.arr.push(this.now); //me
		for(var i = 0; i < this.cnt; i++)this.arr.push((this.now + i +1) % this.len); //오른쪽 (next)
		//if(this.len - 1 <  now + i + 1)
		//마지막 놈의 인덱스값.
		//모드연산자는 나머지 4/3=1 5/3=2
		this.slides.empty();
		for(i in this.arr) this.slides.append($(this.slide[this.arr[i]]).clone());
		//배열의 갯수만큼 for문을 돌림 / 슬라이드에 이미지 3개li가 있고(배열),움직일 li을 복제하여 붙임. 
		this.slides.css({"width":this.width+"%", "left":(this.dir * this.tar)+"%"});
	}
	FxSlide.prototype.ani = function(obj){
		obj.slides.stop().animate({"left":(obj.dir * obj.tar * 2)+"%"},obj.speed,
		function(){
			if(obj.dir == 0)(obj.now == 0) ? obj.now = obj.len -1 : obj.now--;
			else (obj.now == obj.len - 1) ? obj.now =0 : obj.now++;
			obj.dir = -1;
				obj.init();
				// if(this.now == 0)
				// 	this.now = this.len -1;
				// 	else this.now--;
				// else {
				// 	if(this.now == this.len - 1)this.now =0;
				// 	else this.now++;
				// }
		});
	}
	return FxSlide;
 })();