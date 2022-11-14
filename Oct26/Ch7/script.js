// CH7 STORE DATA IN ARRAYS

for (let i = 0; i < myArray.length; i++) {
    // Use myArray[i] to access each array element one by one
  }
  
  myArray.forEach(myElement => {
    // Use myElement to access each array element one by one
  });
  
  for (const myElement of myArray) {
    // Use myElement to access each array element one by one
  }

// OBTAINING THE ARRAY'S SIZE
/* const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
console.log(movies.length); // 3
// ACCESS AN ELEMENT IN ARRAY
console.log(movies[0]); //"The Wolf of Wall Street" - starting from 0
console.log(movies[1]); // "Zootopia"
console.log(movies[2]); // "Babysitting"

// 1. Browse an array element by element --> for loop
for (let i = 0; i <movies.length; i ++){
    console.log(movies[i]);
}

// 2. Browse an array element by element --> forEach()
myArray.forEach(myElement => {
    // Use myElement to access each array element one by one
});

movies.forEach(movie => {
    console.log(movie);
})

// 3. Browse an array element by element --> for-of loop
for (const myElement of myArray) {
    // Use myElement to access each array element one by one
}

for (const movie of movies){
    console.log(movie);
} */

// UPDATING AN ARRAY'S CONTENT
// Adding an element to an array
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.push("Ghostbusters");
console.log(movies[3]); // "Ghostbusters"

movies.unshift("Pacific Rim"); //add new element at the beginning of an array
conscole.log(movies[0]); // "Pacific Rim"

// Removing an element from an array
movies.pop(); //Remove the last array element
console.log(movies.length); //2
console.log(movies[2]); //undefined

movies.splice(0,1); //first one is the index from which to begin removing, and the second one is the number of elements to remove.
//Remove 1 element starting at index 0
console.log(movies.length);
console.log(movies[0]); // "Zootopia"
console.log(movies[1]); //"Babysitting"
