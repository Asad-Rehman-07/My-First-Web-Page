console.log("We are England Cricket");
for(let i=1;i<=5;i++)
	console.log(i);
for(let i=5;i>=1;i--)
	console.log(i);
for(let i=1;i<=15;i++){
	if(i%2==1)
		console.log(i);
}
for(let i=1;i<=10;i++){
	if(i%2==0)
		console.log(i);
}
let n=prompt("Enter a number for table");
for(let c=1;c<=10;c++)
	console.log(`${n}*${c} = ${n*c}`);
for(let i=1;i<=3;i++){
	for(let j=1;j<=3;j++)
		console.log(j);
}
let c=1;
while(c<=5){
	console.log(c);
	c++;
}
const favMovie="Avatar";
let guess=prompt("Guess my favourite movie");
while(guess!=favMovie&&guess!="avatar"){
	if(guess=="Quit"||guess=="quit"){
		console.log("Game Over! You quit");
		break;
	}
	guess=prompt("Wrong guess! Try again");
}
if(guess==favMovie||guess=="avatar")
	console.log("Congratulations! You guessed right movie!");
let fruits=["mango", "apple", "banana", "litchi", "oarnge"];
for(let i=0;i<fruits.length;i++)
	console.log(i+1,fruits[i]);
for(let i=fruits.length-1;i>=0;i--)
	console.log(i+1,fruits[i]);
let students=[["Rauf", "Ali"], ["Zahid", "Shoaib", "Saad"]];
console.log(students);
for(let i=0;i<students.length;i++){
	for(let j=0;j<students[i].length;j++)
		console.log(i+1,j+1,students[i][j]);
}
for(student of students)
	console.log(student);
for(list of students){
	for(student of list)
		console.log(student);
}
for(char of "Germany")
	console.log(char);
let arr=[1,2,3,4,5,6,2,3];
let n1=2;
for(let i=0;i<arr.length;i++){
	if(arr[i]==n1){
		arr.splice(i,1);
		i--;
	}
}
console.log(arr);
let num1=287152;
let ct=0;
let copy=num1;
while(copy>0){
	ct++;
	copy=Math.floor(copy/10);
}
console.log(ct);
//OR
let ct=num1.toString().length;
console.log(ct);
let sum=0;
let copy=num1;
while(copy>0){
	let digit=copy%10;
	sum+=digit;
	copy=Math.floor(copy/10);
}
console.log(sum);
let n2=prompt("Enter a number"),f=1;
for(let c=1;c<=n2;c++)
	f*=c;
console.log(`Factorial of ${n2} is ${f}`);
let arr1=[2,5,10,4,2,7,1,9];
let lar=0;
for(let i=0;i<arr1.length;i++){
	if(arr1[i]>lar)
		lar=arr1[i];
}
console.log(lar);
let todo=[];
while(true){
	let cho=prompt("Enter your choice:");
	if(cho==null){
		if(todo.length===0)
			console.log(cho);
		else
			console.log(todo);
		break;
	}
	if(cho=="quit"||cho=="Quit"){
		if(todo.length===0)
			console.log("Empty");
		else
			console.log(todo);
		console.log("Quitting app");
		break;
	} else if(cho=="list"||cho=="List"){
		console.log("-------------");
		if(todo.length===0)
			console.log("No tasks found!");
		for(let i=0;i<todo.length;i++)
			console.log(i+1,todo[i]);
		console.log("-------------");
	} else if(cho=="add"||cho=="Add"){
		while(true){
			let task=prompt("Enter the task you want to add");
			if(task=="back"||task=="Back"||task==null)
				break;
			else if(task.trim()==""){
				console.log("Task can't be empty!");
				continue;
			}
			todo.push(task.trim());
			console.log("Task added");
		}
	} else if(cho=="delete"||cho=="Delete"){
		while(true){
			let idx=prompt("Enter the task number you want to delete");
			if(idx=="back"||idx=="Back"||idx==null)
				break;
		    idx=Number(idx);
		    if(idx<=0||idx>todo.length)
				console.log("Invalid task number!");
		    else{
				todo.splice(idx-1,1);
		        console.log("Task deleted");
			}
		}
	} else
		console.log("Wrong request!");
}