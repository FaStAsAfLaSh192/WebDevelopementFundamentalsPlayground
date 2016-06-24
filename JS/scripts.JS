//Javascript Review File
console.log("Happy!");

var age = 17;
var myBirthYear =  1998
var graduationYear = 2017
var numberOfBrotherAndSisters = 5;
var numberOfKids = 0;
var P = ".";


console.log("I am " + age + ".");
console.log("I was born in " + myBirthYear + ".");
console.log("I will graduate from highschool " + graduationYear + ".");
console.log("I have " + numberOfBrotherAndSisters + " brothers and sisters" + P);
console.log("I have " + numberOfKids + " kids" + P);

//Manipulating the DOM
document.getElementById("my-age").innerHTML = age;
document.getElementById("my-graduation").innerHTML = graduationYear;
document.getElementById("my-birth-year").innerHTML= myBirthYear;
document.getElementById("brothers-and-sisters").innerHTML = numberOfBrotherAndSisters;
document.getElementById("kids").innerHTML = numberOfKids


var counter = 0;
while(counter < 10) {
	counter++;
	console.log("The score is " + counter);
}

//For LoopS

for(var i = 1; i < 3; i++) {
	console.log(i);
}

for(var i = 0; i <= 31; i+=5) {
	console.log(i);
}

// Create a for loop that counts to 100 by 25s.
//When you get to 50, print "Halfway there!"

for(var i = 0; i <= 101; i += 25) {
	if (i === 50){
		console.log("Halfway There!");
	} else {
		console.log(i);
	}
}

//Create a for loop that counts to 10.
  //  Print each number, 1 through 8, 
   // but print 9 & 10 as "nine" & "ten"

for(var i = 1; i < 11; i++) {
	if(i===9){
		console.log("Nine");
	}else if(i===10) {
		console.log("Ten");
	}else{
		console.log(i);
	}
}


var friends = ["Dylan", "Selena", "Neleva"];
var friendList = "";
for (i = 0; i < friends.length; i++){
	friendList += friends[i];
	console.log(friendList);
}



//Arrays

var abc = "abcdefghijklmnopqrstuvwxyz";
abcArray = ["a", "b", "c", "d", "e"];
var numberArray = [1, 2, 3, 4, 5];

console.log(abc.charAt(3));
console.log(abcArray[2]);

var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "Sprite";
typesOfSoda[2] = "Pepsi";

console.log(typesOfSoda);

var worstKindsOfSoda = new Array();
worstKindsOfSoda[0] = "Coke";
worstKindsOfSoda[1] = "Diet Coke";
worstKindsOfSoda[2] = "SevenUp";
worstKindsOfSoda[3] = "Sprite";

var bestCandyBars = ["Snickers", "Twix", "Hersheys", "Reeses"];
bestCandyBars[4] = "100 Grand";

//console.log(bestCandyBars);


var mixedArray = [1, "Bill Gates", (5 > 1)];
console.log(mixedArray);


//FOR LOOPS

for(var i = 0; i <= 51; i += 5) {
	if (i === 50){
		console.log("I'm rich!");
	} else {
		console.log(i);
	}
}

var friends = ["Dylan", "Selena", "Neleva", "Sam", "Sui"]
for(var i = 0; i < friends.length; i++){
	if(friends[i].charAt(0)=="S"){
		console.log(friends[i]);
	}
}


//Objects
var beachBag = {
	//Properties
	numBottles		: 3,
	colorOfTowel	: "Green",
	isWet			: false,
	//Functions
	zipUp			: function(){
		console.log("ZZzzzziiiiip")
	}
}

console.log(beachBag);
console.log(beachBag.isWet);
beachBag.zipUp();


//make and object called Nerd
//give five (I gave it more than 5) properties

var nerd = {
	shirt			: "T-Shirt with game logo",
	glasses			: "Plastic",
	pants			: "Jeans",
	glassesSight	: "Near Sighted",
	age 			: "Late Teen's",
	gamertag		: "NoLifeJustGames",

	diesInGame		: function(){
		console.log("Launches controller across room at TV")
	}
}

console.log(nerd.gamertag);


var player = {
	//Properties
	name 			: " ",
	life 			: 1000,
	damage			: 10,
	hasLightSword	: true,
	hasSniperRifle	: false,
	hasArmer		: true,

	//Functions
	attack			: function(target){
		console.log(this.name + " attacks " + target + this.damage);
	},

	swatWithSword	: function(target){
		var damage = 25 * this.damage;
		console.log(this.name + " did " + damage + " damage to " + target);
	},

	lightSwordSlash	: function(target){
		var damage = 5 * this.damage;
		console.log(this.name + " slashed him" + " and did " + damage + " damage to" + target);
	},
}



var animal = {
	//Properties
	living			: true,
	eats			: true,
	runs			: true,
	jumps			: true,
	eyes			: 2,
	cute  			: true,
	legs 			: 4,

	//Functions
	howBreathes		: function(animal){
		console.log("soft comforable breathing on the back of your neck");
	}

}

animal.howBreathes();

var snake = Object.create(animal);

console.log(snake.eyes);
snake.legs = 0;
console.log(snake.legs);
snake.breath = function(){
	console.log("Hisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
}
snake.breath();


var rabbit = Object.create(animal);

rabbit.ears = "Huge";
console.log(rabbit.ears);

var cow = Object.create(animal);
cow.spots = "brown";
cow.tail = "medium length";
cow.noise = function(){
	console.log("MOOOOOOOOOOO");
}

console.log(cow.spots);
console.log(cow.tail);
cow.noise();



//jQuery

$(document).ready(function(){
	$('#hw').click(function(){
		$('#fadeInHelloWorld').fadeIn(2000);
	});
});


