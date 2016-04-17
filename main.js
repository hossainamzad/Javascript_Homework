// definig variables:
var cat = "Hello World";

// Variables are
// assigning value to a character.
x = 10
console.log(x)
//it shoud print 10 on the acreen.

// Basic Value Types:

//Numbers : 95; 
// Strings : ("Hello World!");
// Booleans: True. False
// Objects: 
// Undefined: NO vale
// Null: No vale 

// 
// thses are logical operstors for boolean expressions:
<, >, ===, !== conditional operators.
true, false are booleans.
//undefined ()// an empty string is for undefined and meant to be a placeholder.

// logical operators:
	&&,||,!	

	// Strings: a series of characters in (" "); for instance, ("Hello");
Loops: 
for Loop 
for (declare vars; condition; count){
	//run code
}	

example: for (var x = 0; x<10; x++){
	console.log (x);
}

while loop:
x = 7
while (x<=10){
	console.log ("i am "+x);
	x++;
}

// Functions:
function cat (){
	console.log ("Print this.");
}
cat ();
cat ("Meow");
// we call a function by its name followed by ();
// "return" will return value to a new line and stop execution of code.
function cat (){
	console.log ("Print this.");
}
cat ();

function cat (a,b){
	console.log (a);
	console.log (b);
	console.log ("you have entered "  +a+" "+b);
	console.log (b+a);
}
cat ("winter", "summer");

// if/else if/else statements
var x = "NYCDA";
if (x == 0) {
	console.log ("Plese type it again");
} else {
	console.log ("Right");
}
var x = 5;
if (x < 10) {
	console.log ("Plese type it again beause it is less than 10.");
} else {
	console.log ("You typed " + x + ",and it is greater than 10.");
}
var x = 20;
if (x < 10) {
	console.log ("Plese type it again beause it is less than 10.");
} else {
	console.log ("You typed " + x + ",and it is greater than 10.");
}
// Multidimentional Array:

var hale = ["Sam","Kim","Ron"];
var dale = ["Mac", "Windows","Toshiba"];
var i_use_this = [hale,dale];
console.log (i_use_this[1] [0]);
console.log (i_use_this[1] [2]);

people = ["Sam","Kim","Ron"];
// index always starts at 0. For instance, the index for kim is 1.
// to declare an Array, we need something which is called variable.
//var names["Sam","Kim","Ron"];
//to access an item in the array:
//we do :
console.log (people[1]);
 
 // i am creating global and local variables and the scopes where they live:
 var myFavorite = {name: "Rick", background: "Police Officer"};
 function favoriteCharacter (){
 	var myFavorite = {name: "John Snow", background:"soldier"}
 }
 // here i declared two variables: one inside the function is local variable, and the one outside the function is global variabe.
 //once call upom the function, it should console log the John Snow and soldier in the screen.
 //once i call upon the console.log (myFavorite); it shoud print out Rick and Police officer.
 

 //pseudo-code algorithm to check a form's validity:
  // check if the email box isnt filled with a blank string.
     // if the email is blank, return the user a value "Invalid" an dthen ask them again to put in a valid inut and keep doing it until a valid enail is provided.
     //the form shoud have two buttons in it: one for Email and the other one is for password.
       //allow the users to enter any combination of nubers and letters they want to type in for password. And, the valid email shoud have a @ sign at the end of the email.
console.log ("This line should appear on the console.");

var randomNum = 10; 
var suddenNum = 20;
console.log (randomNum + suddenNum);

var randomNum = "Today"; 
var suddenNum = "Sunday";
console.log (randomNum +" is "+ suddenNum);

