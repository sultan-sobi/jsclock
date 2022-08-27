
console.clear();
var h=document.querySelector(".H");
var m=document.querySelector(".M");
var s=document.querySelector(".S");
var ampm=document.querySelector(".ampm");

function clock(){

var time=new Date();
var hour=time.getHours();
var min=time.getMinutes();
var sec=time.getSeconds();
min=formate(min);
sec=formate(sec);


if(hour>=12){
    ampm.innerHTML='pm'
}

h.innerHTML=hour;
m.innerHTML=min;
s.innerHTML=sec;

setTimeout(clock,1000);
}
function formate(value){
if(value<10){
   value='0'+value; 
   
}
return value;
  
}
clock();


