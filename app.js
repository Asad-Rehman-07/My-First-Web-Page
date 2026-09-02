console.log("We are England Cricket");
let arr1=[1,2,3,4,5];
let print=function(el){
	console.log(el);
};
arr1.forEach(print);
// OR
arr1.forEach(function(el){
	console.log(el);
});
// OR
arr1.forEach((el)=> {
	console.log(el);
});
let arr2=[{
	name:"Zahid",
	marks:95
    },
    {
	name:"Rauf",
	marks:94.4
    },
    {
	name:"Ali",
	marks:92
}];
arr2.forEach((student)=> {
	console.log(student.marks);
});
let numbers=[2,4,6,8,-2,-4];
console.log(numbers.map((n)=> n+5));
let num=[1,2,3,4];
let double=num.map((el)=> {
	return el*2;
});
console.log(double);
let string=["zahid", "shoaib", "saad", "rauf", "ali"];
console.log(string.map((str)=> str.toUpperCase()));
let students=[{
	name:"Zahid",
	marks:95
    },
    {
	name:"Rauf",
	marks:94.4
    },
    {
	name:"Ali",
	marks:92
}];
let gpa=students.map((el)=> {
	return Number((el.marks/10).toFixed(2));
});
console.log(gpa);
let nums=[1,2,3,4,5];
const sqr=nums.map((el)=> el*el);
console.log(sqr);
let summ=sqr.reduce((acc,cur)=> acc+cur,0);
console.log(summ);
let avg=summ/nums.length;
console.log(avg);
let nums1=[1,2,3,4,7,8,2,9,10,12,11];
let ans=nums1.filter((el)=> {
	return el%2!=0;
});
console.log(ans);
console.log([2,4,6].every(el => el%2==0));
console.log([1,2,4,6].every(el => el%2==0));
console.log([1,2,3,4].some(el => el%2==0));
console.log([1,3].some(el => el%2==0));
console.log([1,2,3,4].reduce((res,el)=> {
	console.log(res);
	return res+el;
},0));
let arr3=[1,4,2,5,6,7,2,9,2];
let max=arr3.reduce((max,el)=> {
	if(max<el)
		return el;
	else
		return max;
});
console.log(max);
function getMin(arr3){
	let min=arr3.reduce((min,el)=> {
	    if(min<el)
		    return min;
	    else
		    return el;
    });
	return min;
}
console.log(getMin(arr3));
function sum(a,b=3){
	return a+b;
}
console.log(sum(2));
let arr4=[1,4,5,6,3,0,7,9,5,8,2];
console.log(Math.min(...arr4));
console.log(Math.max(...arr4));
console.log([...arr4]);
console.log(..."England");
const data={
	email:"enquiries@ecb.co.uk",
	password:"abcd"
};
const dataCopy={...data, id:123, country:"UK"};
console.log(dataCopy);
console.log({...arr4});
console.log({..."England"});
function sum(...args){
	return args.reduce((sum,el)=> sum+el,0);
}
// OR
function sum(){
	return Array.from(arguments).reduce((sum,el)=> sum+el,0);
}
console.log(sum(1,2,3,4));
function min(msg, ...args){
	console.log(msg);
	return args.reduce((min,el)=> {
		if(min>el)
			return el;
		else
			return min;
	});
}
console.log(min("Hello",1,2,3,4));
function arg(){
	console.log(arguments);
}
arg(1,2,3,4);
let names=["Zahid", "Saad", "Rauf", "Ali"];
let [winner,runnerUp,...others]= names;
console.log(winner,runnerUp,others);
const student2={
	name:"Shoaib",
	age:17,
	class:12,
	subjects:["Urdu","English","Math","Physics"],
	userName:"shoaib@123",
	password:"abcd"
};
let {userName:user,password:secret,city:place="Lahore",...others1}=student2;
console.log(user,secret,place,others1);
const doubleAndReturnArgs=(arr,...args)=> [...arr,...args.map((n)=> n*2)];
console.log(doubleAndReturnArgs([1,2,3],4,4));
console.log(doubleAndReturnArgs([2],10,4));
const mergeObjs=(obj1,obj2)=> ({...obj1,...obj2});
console.log(mergeObjs({a:1,b:2},{c:3,d:4}));