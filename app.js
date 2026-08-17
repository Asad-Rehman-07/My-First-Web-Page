console.log("We are England Cricket");
const student={
	name:"Asad",
	age:19,
	eng:95,
	math:93,
	phy:97,
	getAvg(){
		let avg=(this.eng+this.math+this.phy)/3;
		console.log(`${this.name} got avg marks = ${avg}`);
	}
}
try{
	console.log(a);
} catch(e){
	console.log(`Error caught... ${e}`);
} finally{
	console.log("Error handled successfully");
}
const sum1=(a,b)=> a+b;
console.log(sum1(2,3));
// OR
const sum1=(a,b)=> console.log(a+b);
sum1(2,3);
const cube= n =>{
	return n**3;
};
console.log(cube(3));
const pow=(a,b)=>{
	return a**b;
};
console.log(pow(2,4));
const square= n => n**2;
console.log(square(4));
const isEven= n => n%2==0;
console.log(isEven(4));
const arrAvg=(arr)=>{
	let total=0;
	for(let number of arr)
		total+=number;
	return total/arr.length;
};
let arr=[1,2,3,4,5,6];
console.log(arrAvg(arr));
console.log("Hi there!");
let id=setTimeout( ()=> console.log("Edexcel Academy"), 4000);
console.log("Welcome to");
console.log(id);
let id1=setInterval( ()=>{
	console.log("Edexcel Academy");
	clearInterval(id1);
},2500);
console.log(id1);
// OR
let id1=setInterval( ()=> console.log("Edexcel Academy"), 2000);
setTimeout( ()=>{
	clearInterval(id1);
	console.log("Stopped after 5 times!");
},10000);
let id2=setInterval( ()=>console.log("Hello World!"), 2000);
setTimeout( ()=>{
	clearInterval(id2);
	console.log("Clear interval ran");
},10000);
const student1={
	name:"Asad",
	marks:95,
	prop:this,
	getName:function(){
		console.log(this);
		return this.name;
	},
	getMarks:()=>{
		console.log(this);
		return this.marks;
	},
	getInfo1:function(){
		setTimeout( ()=> console.log(this), 2000);
	},
	getInfo2:function(){
		setTimeout(function(){
			console.log(this);
		},2000);
	}
};