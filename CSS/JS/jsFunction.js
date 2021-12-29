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
