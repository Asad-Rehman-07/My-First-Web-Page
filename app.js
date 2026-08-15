console.log("We are England Cricket");
const students={
	Zahid:{
		grade:"A+",
		city:"Lahore"
	},
	Rauf:{
		grade:"A",
		city:"Islamabad"
	},
	Ali:{
		grade:"O",
		city:"Sargodha"
	}
};
console.log(students);
const students1=[
    {
		name:"Zahid",
		grade:"A+",
		city:"Lahore"
	},
	{
		name:"Rauf",
		grade:"A",
		city:"Islamabad"
	},
	{
		name:"Ali",
		grade:"O",
		city:"Sargodha"
	}
];
console.log(students1);
const car={
	name:"Corolla",
	model:"Corolla Altis Grande",
	colour:"Super white"
};
console.log(car.name);
const person={
	name:"James Anderson",
	age:30,
	city:"New York"
};
person.city="London";
person.country="UK";
console.log(person);
const item={
	price:100.99,
	discount:50,
	colours:["red", "pink"]
};
let random=Math.floor(Math.random()*100)+1;
console.log(random);
let dice=Math.floor(Math.random()*6)+1;
console.log(dice);
const max=prompt("Enter the max number");
if(max=="quit"||max=="Quit"||max==null)
	console.log("Game ended before it started! You quit the game");
else{
	const random=Math.floor(Math.random()*max)+1;
    let guess=prompt("Guess the number:");
    while(true){
		if(guess=="quit"||guess=="Quit"||guess==null){
			console.log("Game over! You quit the game");
		    break;
	    } else if(guess==random){
		    console.log("Congratulations! You are right! Random number was",random);
		    break;
	    } else if(guess<random){
			guess=prompt("Your guess was too small! Try again");
		} else{
		    guess=prompt("Your guess was too high! Try again");
	    }
    }
}
