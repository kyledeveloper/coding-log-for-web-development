// user input a maximum number
// make a random number
// prompt user to guess
// record guess time
// show the number and guess time while user guess right



// use parseInt is because whatever user input is a string. 
let numRange = parseInt(prompt("Enter the maximum number"))
// check if falsey (user input a Non-number)
if (!numRange);
while (!numRange){
    numRange = parseInt(prompt("invaild number, set again"));
} 
const ranNum = Math.floor(Math.random() * numRange)+1;
let userAttempt = 1;
let userGuest = (prompt("Enter your guess"));
while (userGuest!= ranNum){
    
    if (userGuest > ranNum){
        userGuest = ((prompt("Too large,try again")));
        console.warn();
    }
    else{
        userGuest = ((prompt("Too small,try again")));
    }
   
    userAttempt++;
    if (userGuest =="q"){
        break;
    }
}
console.log(`you guess ${userAttempt}times`)
console.log(`the number is #${ranNum}`)