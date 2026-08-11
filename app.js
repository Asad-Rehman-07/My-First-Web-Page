console.log("We are England Cricket");
let mon="January";
if(mon=="January")
	console.log("Winter is here")
else if(mon=="April")
	console.log("Spring is here");
let num=16;
if(num%10==0)
	console.log("Good");
else
	console.log("Bad");
let str="Apple";
if(str[0]=="A"||str[0]=="a"&&str.length>5)
	console.log("Golden string");
else
	console.log("Not a Golden string");
let n1=32, n2=47852;
if(n1%10==n2%10)
	console.log(`Numbers have the same last digit which is ${n1%10}`);
else
	console.log("Numbers don't have the same last digit");
//OR
let str1=String(n1);
let str2=String(n2);
if(str1[str1.length-1]==str2[str2.length-1])
	console.log(`Numbers have the same last digit which is ${str1[str1.length-1]}`);
else
	console.log("Numbers don't have the same last digit");
let a=5, b=6, c=7;
if(a>b){
	if(a>c)
		console.log(a+" is largest");
	else
		console.log(c+" is largest");
}
else if(b>c)
	console.log(b+" is largest");
else
	console.log(c+" is largest");
let quarter=1;
switch(quarter){
	case 1:
	console.log("January, February, March");
	break;
	case 2:
	console.log("April, May, June");
	break;
	case 3:
	console.log("July, August, September");
	break;
	case 4:
	console.log("October, November, December");
	break;
	default:
	console.log("Not a quarter!");
}
console.error("This is an error message");
console.warn("This is an warnning message");
let name=prompt("Enter your name");
let age=prompt("Enter your age");
alert(`${name} is ${age} years old`);
