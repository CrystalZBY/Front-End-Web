// CH6. CREATE YOUR FIRST OBJECTS

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};
// Access an object's properties
/* console.log(pen.type);
console.log(pen.color);
console.log(pen.brand); */

pen.color = "red"; //Modify the pen color property

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen.`);

/* const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
}
function describe(character){
    return `${character.name} has ${character.health} health points and ${character.strength} as strength.`;
}
console.log(describe(aurora)); */

// This KETYWORD
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,

    describe(){
        return `${this.name} has ${this.health} health points and ${this.strength} as strength.`;
    }
}
console.log(aurora.describe());