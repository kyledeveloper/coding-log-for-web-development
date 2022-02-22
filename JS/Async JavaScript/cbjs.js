// selecting the body
const bgselector = document.querySelector("body")
// test to see if we succefully select

const rainbow = ['red','orange','yellow','green','blue','purple'];
const length = rainbow.length;

function changebackGroundinDelay(i){
    setTimeout(function (){
        bgselector.style.backgroundColor = rainbow[i]
    },250 * i)
}
function setDelay(){
    for(let i = 0;i<= length;i++){
        changebackGroundinDelay(i)
    }
}

setDelay()
