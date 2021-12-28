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

let numArray = [1,2,3,4,5,6]
numArray[numArray.length] = 7
console.log(numArray)
numArray.push(8)
console.log(numArray)
numArray.pop()
numArray.unshift(0)
numArray.shift()
console.log(numArray)
newarray = numArray.slice(3,4)
console.log(newarray)