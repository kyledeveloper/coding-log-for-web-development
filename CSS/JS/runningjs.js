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

let numArray = [1,2,3,4,5,6];
numArray[numArray.length] = 7;
console.log(numArray);
numArray.push(8);
console.log(numArray);
numArray.pop();
numArray.unshift(0);
numArray.shift();
console.log(numArray);
newarray = numArray.slice(3,4);
console.log(newarray);

 const user = {
    //  use structure as key:value 
     firstName: "Kyle",
     lastName: "Liang",
     stuID : 9900219,
     age : 27,

 };

 console.log(user)
//  access to the data inside the object
// first sytax,use [] and ""
console.log(user["firstName"])
// second sytax, use . 
console.log(user.firstName)
// different between 
let x ="first" + "Name"
console.log(user[x]) //this should print out Kyle 
// by using  [], we can have a expression inside the []
console.log(user.x)
// by using . we can only use the properties that the object have

user.age = 28
console.log(user)
user.gpa = 3.95
console.log(user)