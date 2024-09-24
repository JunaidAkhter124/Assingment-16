// chapter 15
// q1
var Arr= [];
console.log(Arr);  
 
// q2
var Arr = ["Hello, world!"];
console.log(Arr);  

q3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

q4

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
console.log(alphabet.length);  

 q5
let Arr = ["firstElement"];
myArray[1] = "secondElement";
alert(Arr[1]);



// chapter 16.
q1

let myArray = ["Junaid"];
myArray.push("Akhter");
alert(myArray[myArray.length - 1]);

q2
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
console.log(Alphabet); 


q3
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(5);
console.log(Alphabet);  

q4

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);  

q5
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);  

q6
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "parrot", "hen");
console.log(pets);  

q7
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
console.log(pets);  

q8
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
console.log(reducedPets);  