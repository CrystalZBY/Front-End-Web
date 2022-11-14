// THE JAVASCRIPT WAY - CH6 OBJECTS

// 1. Adding Character Experience
function chapter6_1(){
    const aurora = {
        name: "Aurora",
        health: 150,
        strength: 25,
        xp: 10,

        describe(){
            return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`;
        }
    }
    // TODO: create the character object here
    // Aurora is harmed by an arrow
    aurora.health -= 20;
    // Aurora equips a strength necklace
    aurora.strength += 10;
    // Aurora learn a new skill
    aurora.xp += 15;

    console.log(aurora.describe());
}

// 2. Modeling a dog
function chapter6_2(){
    // TODO: create the dog object here
    const dog = {
        name: "Fang",
        species: "boarhound",
        size: 75,
        bark: "Grrr! Grrr!"
    }

    console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`); 
    console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
}

// 3. Modeling a circle
function chapter6_3(){
    const r = Number(prompt("Enter the circle radius:"));

    // TODO: create the circle object here
    const circle = {
        circumference: 2*r*3.14,
        area: 3.14*r*r,
    }

    console.log(`Its circumference is ${circle.circumference()}`);
    console.log(`Its area is ${circle.area()}`);
}

// 4. Modeling a bank account
const account = {
    name: "Alex",
    balance: 0,
    
    describe(){
        return `owner: ${this.name}, balance ${this.balance}`;
    }
}
console.log(account.describe());

account.balance += 250;
account.balance -= 80;

// THE JAVASCRIPT WAY - CH7 ARRAYS

// 1. Musketeers
function chapter7_1(){
    const musketeers = ["Athos", "Porthos", "Aramis"];
    console.log(musketeers.length);
    for (let i = 0; i <= musketeers.length; i++){
        console.log(musketeers[i]);
    }
}