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


