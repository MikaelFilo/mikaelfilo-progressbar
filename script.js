/*
- Javascript is the main content of a website 
that adds dynamicity to your webpage and adds more functions to your webpage..

- DOM is used and some inbuilt functions like setInterval and clear Interval are used.

- setInterval function is used to repeat a function after a fixed interval and this will stop executing when clearInterval is executed.
We have used addEventListener and added an event click which means the function inside the block runs when the event is active as here event is clicked when the content which is tagged is clicked.
I have also added dynamic styling through Javascript and give the background a conic gradient.
*/


const number = document.getElementById("number");
const value1 = document.querySelector(".value1");
const outer = document.querySelector(".outer");
const submit = document.querySelector(".submit");
const color = document.getElementById("color");
const duration = document.getElementById("time");
const time = 100;
var num = 0;

submit.addEventListener("click", () => {
	num=0;
	var color1 = color.value;
	var numb=setInterval(()=>{
		value1.innerHTML=`${num}%`
		num = num + 1;
		outer.style.backgroundImage = `conic-gradient(${color1} ${num*3.6}deg, white ${num*3.6}deg)`
        if(num > number.value){
        	clearInterval(numb)
        }		
	}, time);
})

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


