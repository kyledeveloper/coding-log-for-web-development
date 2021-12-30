function lastElement(array){
    console.log(array[array.length-1])
    
}

console.log(lastElement([]))

// use variable to store a function 
const add = function (x, y) {
    return x + y
}

// define a function
function rollDie(){
    const die = Math.floor(Math.random()*6 +1)
    console.log(die)
}

// use a function as the argument of the function
function rollNTimes(func, times){
    for (let i = 0 ; i < times; i++){
        func();
    }
}

rollNTimes(rollDie,5)

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}

// const myMysterFunc = makeMysteryFunc()
// myMysterFunc()

function makebetweenfunc(min,max){
    return function(num) {
        return num >= min && num <= max;
    }
}

let mybetweenfunc = makebetweenfunc(0,100);
console.log(mybetweenfunc(90))


const nums = [1,2,3,4,5,6,7,8]
// for each element in nums, use that element as the arguement of the function that defined in forEach
nums.forEach(function(n){
    console.log(n*2)
})
// use Array.map to return a new array 
const double = nums.map(function(num){
    return num*2
})
console.log(double)

// Arrow functions use => Arrow function reduce code lines,but only works if there is one single lines inside the function 
const add2=(x,y)=>{
    console.log(x+y)
}
add2(5,9)

const rollDie1 = () =>{
    
    return Math.floor(Math.random()*6 +1) 
}

console.log(rollDie1())

//Implicit returns only work if there is only one line in the function
const rollDie2 = () =>( Math.floor(Math.random()*6 +1) ) 
console.log(rollDie2())

const rollDie3 = () => Math.floor(Math.random()*6 +1) 
console.log(rollDie3())

// setTimeout() 
console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GOODBYE!!")

// setInterval()
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);
//  to stop setInterval() use clearInteval and the indicator variable we set previously, in this case id
clearInterval(id);

// FILTER
let newNum = nums.filter(n=> n!==1)
console.log(newNum)

let userNames = ["kyle1234","elaine 32142354","hugo993","mario1999"]


// let validName = userNames.filter(element => element.length <10)
// console.log(validName)

// function validUserNames1(userN){
//     return userN.filter(function(username){
//         return username.lenght < 10;
//     })

// }

// validUserNames1(userNames)

function validUserNames(username){
    return username.filter(function(u){
        return u.length <10;
    })
} 
console.log(validUserNames(userNames))