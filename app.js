console.log("We are England Cricket");
let str1=prompt("Enter a string");
if(str1.length==0)
	console.log("String is empty");
else
	console.log("String is not empty");
let str3=prompt("Enter a string");
console.log(`Original string: ${str3}`);
console.log(`String without spaces: ${str3.trim()}`);
let msg=" help! ";
console.log(msg.trim().toUpperCase());
let str2="Hello World!";
if(str2[3]==str2[3].toLowerCase()&&str2[3]!=str2[3].toUpperCase())
	console.log(`The character at index ${3} is lowercase`);
else
	console.log(`The character at index ${3} is not lowercase`);
let num=[7,9,0,-2];
let ans1=num.slice(0,3);
console.log(ans1);
let ans2=num.slice(1);
console.log(ans2);
let name="ApnaCollege";
console.log(name.slice(4).replace("l","t").replace("l","t"));
let students=["Rauf", "Ali", "Zahid", "Shoaib", "Saad"];
console.log(students);
console.log(students.reverse());
console.log(students.sort());
let arr=["January", "July", "March", "August"];
arr.splice(0, 2, "July", "June");
console.log(arr);
// OR
let res=arr.toSpliced(0, 2, "July", "June");
console.log(res);
// OR
let res=["July", "June",...arr.slice(2)];
console.log(res);
// OR
let res=["July", "June"].concat(arr.slice(2));
console.log(res);
let arr1=["Hello", "a", 23, 64, 99, -6];
if(arr1[4]!=-1)
	console.log("Element exists in array");
else
	console.log("Element doesn't exists in array");
//OR
if(arr1.includes(64))
	console.log("Element exists in array");
else
	console.log("Element doesn't exists in array");
let lang=["C", "C++", "Html", "JavaScript", "Python", "Java", "C#", "Sql"];
console.log(lang.reverse().indexOf("JavaScript"));
let game=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(structuredClone(game));
game[0].splice(1,1,"O");
console.log(game);