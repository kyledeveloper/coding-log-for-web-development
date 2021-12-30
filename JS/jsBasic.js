console.log("HI there");
// const age = prompt("Input your age");
// if (age<10){
//     console.log("too young");
// }
// else if ( 10 <= age <=20){
//     console.log("Target age");
// }
// else {
//     console.log("too old");
// }

let numArray = [1, 2, 3, 4, 5, 6];
numArray[numArray.length] = 7;
console.log(numArray);
numArray.push(8);
console.log(numArray);
numArray.pop();
numArray.unshift(0);
numArray.shift();
console.log(numArray);
newarray = numArray.slice(3, 4);
console.log(newarray);

const user = {
    //  use structure as key:value 
    firstName: "Kyle",
    lastName: "Liang",
    stuID: 9900219,
    age: 27,

};

console.log(user)
//  access to the data inside the object
// first sytax,use [] and ""
console.log(user["firstName"])
// second sytax, use . 
console.log(user.firstName)
// different between 
let x = "first" + "Name"
console.log(user[x]) //this should print out Kyle 
// by using  [], we can have a expression inside the []
console.log(user.x)
// by using . we can only use the properties that the object have

user.age = 28
console.log(user)
user.gpa = 3.95
console.log(user)

// use for loop to looping the array
for (i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
}
// what if we want to print the array reversely?
for (i = numArray.length - 1; i >= 0; i--) {
    console.log(numArray[i])
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase())
}

// for of loop for(variable of iter) very similar to python for loop
for (let i of numArray) {
    console.log(i * 2);
}
for (let char of "Hello world") {
    console.log(char)
}
// iterate Object 
// method No1
// for in loop to iter a Object
for (i in user) {
    console.log(`${i}:${user[i]}`)
}
// method No2 use Object.keys or values to create a new array that can use for of loop to iterate
console.log(Object.keys(user))
console.log(Object.values(user))

