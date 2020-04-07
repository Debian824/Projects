//exercise 1 
let addressNumber = " 55 ";
let addressStreet = " Ben Yehuda ";
let Country = " Israel ";
let global_address =  "I live at" + addressNumber+ addressStreet + Country;

console.log(8+7)

//exercise 2
let op = "me";
isNaN(op); //returns true because op is Not a Number

let op1 = 10;
op1.toString(); //returns "10"

let op2 = 10.6789
op2.toFixed(0); //returns 11
op2.toFixed(2); //returns 10.68

//exercise 3
let birthyear = 1996;
let futureyear = 2020;
let age = (birthyear-futureyear);
console.log("I will be " + " age " +" in " + futureyear);

//exercise 4
let users = ["Jon", "Bill", "Nancy"] 
let colors = ["blue", "Yellow", "teal"]
let favorite = colors[0];
let second_favorite = colors[2];
console.log(favorite) //blue
console.log(second_favorite) //green

//excercise 5
let simple_array = [
[1, 2, 5], [7, 6, 10, 11, 12],[3]

]

let colors1 = [green, silver, gold];
colors1[0]  = "silver"
console.log(colors1) 

let age = =>18
