console.log("We are England Cricket");
let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Events Practice</u>";
document.querySelector("body").prepend(h1);
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
	let h2=document.querySelector("h2");
	h2.innerText=getRandomColour();
	let div=document.querySelector("#container #box");
	div.innerText="This is your new colour";
	div.style.color="white";
	div.style.backgroundColor=getRandomColour();
	console.log("Colour updated");
});
function getRandomColour(){
	let red=Math.floor(Math.random()*256);
	let green=Math.floor(Math.random()*256);
	let blue=Math.floor(Math.random()*256);
	let colour=`rgb(${red}, ${green}, ${blue})`;
	return colour;
}
let h2=document.querySelectorAll("h2")[1];
let h3=document.querySelector("h3");
let p=document.querySelector("p");
function changeColour(){
	console.log(this.innerText);
	this.style.backgroundColor="blue";
}
h2.addEventListener("click",changeColour);
h3.addEventListener("click",changeColour);
p.addEventListener("click",changeColour);
let inp=document.querySelector("input")
let btn1=document.createElement("button");
btn1.innerText="Click me!";
inp.insertAdjacentElement("afterend",btn1);
btn1.addEventListener("click",function(){
	console.log(this.innerText);
	this.style.backgroundColor="green";
	this.style.color="white";
});
btn1.addEventListener("mouseout",function(){
	console.log("Mouse left the button");
});
let inp1=document.querySelector("input");
inp1.addEventListener("keydown",function(event){
	console.log(event.key);
	console.log(event.code);
	console.log("Key was pressed");
});
// And
inp1.addEventListener("keyup",function(){
	console.log("Key was released");
});
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
	event.preventDefault();
	let user=document.querySelector("#user");
	let password=document.querySelector("#pass");
	// OR
	let user=this.elements[0]; //form.elements[0];
	let password=this.elements[1]; //form.elements[1];
	console.log(user.value);
	console.log(password.value);
	alert(`Hi ${user.value}, your password is set to ${password.value}`);
});
let p1=document.querySelectorAll("p")[1];
let inp2=document.querySelector("#text");
inp2.addEventListener("input",function(){
	console.log(this.value);
	p1.innerText=this.value;
});
window.addEventListener("scroll",function(){
	console.log("Page is being scrolled!");
	console.log(`Current Y offset: ${window.scrollY}px`);
});
window.addEventListener("load",function(){
	console.log("Whole page fully loaded!");
});
let inp3=document.querySelector("#name");
let hdg3=document.querySelector("#displayName");
inp3.addEventListener("input",function(){
	let filteredText="";
	for(let char of inp3.value){
		if((char>='a'&&char<='z')||(char>='A'&&char<='Z')||char==' ')
			filteredText+=char;
	}
	this.value=filteredText;
	hdg3.textContent=filteredText;
});