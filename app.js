console.log("We are England Cricket");
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelectorAll("p"));
console.dir(document.querySelectorAll("div a"));
let heading=document.querySelector("h2");
console.log(heading);
heading.style.fontSize="1.75rem";
heading.innerHTML=`<u>${heading.innerText}</u>`;
let links=document.querySelectorAll(".box a");
for(link of links)
	link.style.color="purple";
for(let i=0;i<links.length;i++)
	links[i].style.color="yellow";
let para1=document.createElement("p");
para1.innerText="Hey, I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red");
let h3=document.createElement("h3");
h3.innerText="Hey, I'm blue H3";
document.querySelector("body").prepend(h3);
h3.classList.add("blue");
let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("para2");
h1.innerText="I'm in a div";
para2.innerText="Me Too!";
div.append(h1);
div.append(para2);
div.classList.add("div");
document.querySelector("script").insertAdjacentElement("beforebegin",div);
let input=document.createElement("input");
let button=document.createElement("button");
button.innerText="Click me!";
document.querySelector("body").append(input);
document.querySelector("body").append(button);
input.setAttribute("placeholder","Username");
button.setAttribute("id","btn");
let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");
// OR
btn.style.color="white";
btn.style.backgroundColor="blue";
let hdg1=document.createElement("h1");
hdg1.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").prepend(hdg1);
// OR
hdg1.style.color="purple";
// OR
hdg1.setAttribute("id","h1");
document.querySelector("#h1").style.color="purple";
// OR
hdg1.setAttribute("class","h1");
document.querySelector(".h1").style.color="purple";
let para=document.createElement("p");
para.innerHTML="<b>Edexcel Academy</b>";
document.querySelector("body").append(para);