console.log("We are England Cricket");
function hello(){
	console.log("Hello");
}
hello();
function printPoem(){
	console.log("Twinkle, twinkle, little star,");
	console.log("How I wonder what you are!");
	console.log("Up above the world so high,");
	console.log("Like a diamond in the sky");
}
printPoem();
function rollDice(){
	let random=Math.floor(Math.random()*6)+1;
	console.log(random);
}
rollDice();
function printInfo(name,age){
	console.log(name,age); 
}
printInfo("Asad",19);
function printTable(n){
	for(let c=1;c<=10;c++)
		console.log(`${n}*${c}=${n*c}`);
}
let n=prompt("Enter a number for table");
printTable(n);
function calcAvg(a,b,c){
	return (a+b+c)/3;
}
console.log(calcAvg(3,8,16));
function printSum(n1){
	let sum=0;
	for(let i=1;i<=n1;i++)
		sum+=i;
	return sum;
}
let n1=prompt("Enter a number");
console.log(printSum(n1));
let str=["Hi", "Hello", "Bye", "!"];
function concat(str){
	return "Hi "+"Hello "+"Bye"+"!";
}
console.log(concat());
// OR
function concat(str){
	let result="";
	for(let i=0;i<str.length;i++){
		result+=str[i];
	    if(i<str.length-2)
			result+=" ";
	}
	return result;
}
console.log(concat(str));
// OR
function concat(str){
	let result="";
	for(let i=0;i<str.length;i++)
		result+=str[i]+" ";
	result=result.replace(" !","!");
	return result;
}
console.log(concat(str));
function outerFunc(){
	let x=5,y=6;
	function innerFunc(){
		console.log(x);
		console.log(y);
	}
	innerFunc();
}
let greet="Hello";
function changeGreet(){
	let greet="Assalam o Alaikum";
	console.log(greet);
	function innerGreet(){
		console.log(greet);
	}
	innerGreet();
}
console.log(greet);
changeGreet();
let sum=function(a,b){
	return a+b;
}
console.log(sum(1,2));
function multipleGreet(func,n){
	for(let i=1;i<=n;i++)
		func();
}
let greet1=function(){
	console.log("Hello");
}
multipleGreet(greet1,3);
function oddEvenFactory(request){
	if(request.toLowerCase()=="odd"){
		return function(n){
			console.log(n%2!=0);
		}
	} else if(request.toLowerCase()=="even"){
		return function(n){
			console.log(n%2==0);
		}
	} else{
		console.log("Wrong request!");
	}
}
let request=prompt("Enter 'odd' or 'even' to choose your test type:");
let check=oddEvenFactory(request);
if(check){
	let number=prompt("Enter a number to check:");
	check(number);
}
const calculator={
	add:function(a,b){
		return a+b;
	},
	sub:function(a,b){
		return a-b;
	},
	mul(a,b){
		return a*b;
	},
	div(a,b){
		return a/b;
	}
};
console.log(calculator.add(5,10));
console.log(calculator.sub(10,4));
console.log(calculator.mul(3,4));
console.log(calculator.div(20,5));
let arr=[8,9,10,1,2,3,4,5,6,7], n2=5;
function getElements(arr,n2){
	for(let i=0;i<arr.length;i++){
		if(arr[i]>n2)
			console.log(arr[i]);
	}
}
getElements(arr,n2);
let str1="WeAreEnglandCricket";
function countVowels(str1){
	let c=0;
	for(let i=0;i<str1.length;i++){
		if(str1.charAt(i).toLowerCase()=="a"||str1.charAt(i).toLowerCase()=="e"||str1.charAt(i).toLowerCase()=="i"||str1.charAt(i).toLowerCase()=="o"||str1.charAt(i).toLowerCase()=="u")
			c++;
	}
	return c;
}
console.log(countVowels(str1));
let str2="abcdabcdefgggh";
function getUnique(str2){
	let ans="";
	for(let i=0;i<str2.length;i++){
		let currChar=str2[i];
		if(ans.indexOf(currChar)==-1)
			ans+=currChar;
	}
	return ans;
}
console.log(getUnique(str2));
let country=["United Kingdom", "Australia", "Germany"];
function longestName(country){
	let ansIdx=0;
	for(let i=0;i<country.length;i++){
		let ansLen=country[ansIdx].length;
		let currLen=country[i].length;
		if(currLen>ansLen)
			ansIdx=i;
	}
	return country[ansIdx];
}
console.log(longestName(country));
function generateRandom(){
	let input=prompt("Enter start and end number (separated by comma) :");
	if(input){
		let commaIdx=input.indexOf(",");
		if(commaIdx!=-1){
			let start=Number(input.slice(0,commaIdx).trim());
			let end=Number(input.slice(commaIdx+1).trim());
			let diff=end-start;
			let random=Math.floor(Math.random()*(diff+1))+start;
			return random;
		}
	}
}
console.log(generateRandom());
// OR
function generateRandom(){
	let input=prompt("Enter start and end number (separated by comma) :");
	if(input){
		let [start,end]=input.split(",").map(function(item){ //OR .map(item => Number(item.trim()));
			return Number(item.trim());
		});
		let diff=end-start;
		let random=Math.floor(Math.random()*(diff+1))+start;
		return random;
	}
}
console.log(generateRandom());