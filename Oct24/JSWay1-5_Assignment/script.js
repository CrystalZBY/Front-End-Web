// The Javascript Way - Chapter 3 Add Conditions

// 1. Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
function chapter3_1 (){
    let input = prompt ("Enter a day:");
    let followingDay = input.toLowerCase();

    switch (followingDay){
        case "monday":
            followingDay = "Tuesday";
            alert(`Tuesday`);
            break;
        case "tuesday":
            followingDay = "Wednesday";
            alert(`Wednesday`);
            break;
        case "wednesday":
            followingDay = "Thursday";
            alert(`Thursday`);
            break;
        case "thursday":
            followingDay = "Friday";
            alert(`Friday`);
            break;
        case "friday":
            followingDay = "Saturday";
            alert(`Saturday`);
            break;
        case "saturday":
            followingDay = "Sunday";
            alert(`Sunday`);
            break;
        case "sunday":
            followingDay = "Monday";
            alert(`Monday`);
    }
    console.log(followingDay);
}

// 2. Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
function chapter3_2 (){
    let a = Number(promt("Enter the first number: "));
    let b = Number(promt("Enter the second number: "));

    if (a > b){
        console.log(`${a} is greater than ${b}`);
        alert(`${a} is greater than ${b}`);
    } else if (a === b){
        console.log(`${a} is equal to ${b}`);
        alert(`${a} is equal to ${b}`);
    } else if (a < b){
        console.log(`${a} is smaller than ${b}`);
        alert(`${a} is smaller than ${b}`);
    }
}

// The Javascript Way - Chapter 4 Add Conditions

// 1. Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time. When it’s done, improve it so that the number of turns is given by the user.
function chapter4_1 (){
    // version 1
    /* for(let i = 0; i <= 10; i++){
        console.log("Turn" + i);
        i++;
    } */

    // version 2
    let turns = Number(prompt("How many times does the carousel turn?"))
    for(let i = 1; i <= 10; i++){
        console.log("Turn" + i+1);
        alert(`Turn ${i+1}`);
    }
}

// 2. Parity
function chapter4_2 (){
    // version 1
    /* for (let i = 1; i <= 10; i ++){
        if (i % 2 === 0){
            console.log(`${i} is even`);
        } else if (i % 2 === 1{
            console.log(`${i} is odd`);
        }
    } */

    // version 2
    let iniNumber = Number(prompt("Give an initial number: "));

    for (let i = iniNumber; i <= iniNumber + 10; i++) {
        if (i % 2 === 0){
            console.log(`${i} is even`);
        } else if (i % 2 === 1){
            console.log(`${i} is odd`);
        }
    }
}

// 3. Input Validation
function chapter4_3() {
    while (number) {
        number = Number(prompt("Enter a number: "));
        if (number >= 100) {
            prompt("Enter a number: ");
            alert(`${number} is greater than 100!`);
        }else{
            alert(`${number} is less or equal to 100!`);
        }
    }
}

// The Javascript Way - Chapter 5 Add Conditions

// 1. Improved hello
function chapter5_1 (){
    function sayHello(firstName, lastName){
        const message = `Hello, ${firstName} ${lastName}!`;
        return message;
    }

    const firstName = prompt ("Enter your first name: ");
    const lastName = prompt ("Enter your last name: ");
    return sayHello(firstName, lastName);

}

// 2. Number squaring
function chapter5_2 (){
    // version 1
    /* function square1(x) {
        return Math.pow (x, 2);
    }

    const square2 = x => {
        return Math.pow (x, 2);
    }

    console.log(square1(0));
    console.log(square1(2));
    console.log(square1(5));

    console.log(square2(0));
    console.log(square2(2));
    console.log(square2(5)); */

    // version 2
    function square (){
        for (i = 0; i <= 10; i++){
            result = Math.pow (i, 2);
            alert(`The squre of is ${result}.`);
        }
    }
}

