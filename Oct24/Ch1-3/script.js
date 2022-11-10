/* console.log("Hello from Javascript"); */

/* const name = prompt ("Enter your first name: ");
alert(`Hello, ${name}`) */

/* const input = prompt("Enter a number: ");
const nb = Number(input);
// the same as
const nb = Number(prompt("Enter a number:")); */



/* //JS Way Chapter 2
let a = 2;
a -= 1;
a++; //2
let b = 8;
b += 2; //10
const c = a + b * b; //102
const d = a * b + b; //30
const e = a * (b + b); //40
const f = a * b / a; //10
const g = b / a * a; //10
console.log(a, b, c, d, e, f, g); */



//JS Way Chapter 3

/* //Nesting Conditions
const number = Number(prompt("Enter a number;"));
if (number > 0){
    console.log(`${number} is positive`);
} else if(number < 0){
        console.log(`${number} is negative`);
 }else{
        console.log(`${number} is zero`);
    } */

/* //Add Operator 
const number = Number(prompt("Enter a number;"));
if((number >= 0) && (number <= 100)){
    console.log(`${number} is between 0 and 100, both included`)
} */

/* //"Not" operator
const number = Number(prompt("Enter a number;"));
if (!(number > 100)){
    console.log(`${number} is less or equal to 100`);
}
 */

//Coding Time!
let day = prompt ("Enter a day number:");
switch (day){
    case "1":
        day = "Monday";
        break;
    case "2":
        day = "Tuesday";
        break;
    case "3":
        day = "Wednesday";
        break;
    case "4":
        day = "Thursday";
        break;
    case "5":
        day = "Friday";
        break;
    case "6":
        day = "Saturday";
        break;
    case "7":
        day = "Sunday";
}
console.log(day);