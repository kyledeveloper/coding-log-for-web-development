const btn = document.querySelector("button");
btn.addEventListener("click",function(e){
    console.log("clicked")
    console.log(e)
})
const input = document.querySelector("input")
input.addEventListener("keyup",()=> console.log("keyup"))

input.addEventListener("keydown",function(evt){
    console.log(evt)
    console.log(evt.code)
    console.log(evt.key) // will be different regarding different language

})
// focus on evt.code and evt.key
//use code attritube to make charter move
window.addEventListener("keydown", function(evt){
    switch (evt.code){
        case 'ArrowUp':
            console.log("Up");
            break;
        case 'ArrowDown':
            console.log("Down");
            break;
        case 'ArrowRight':
            console.log("Right");
            break;
        case 'ArrowLeft':
            console.log("Left");
            break;
      }
})

//inside the form, if we clicked submit, the html page will refresh or do whatever action is, however we can prevent it by using some code
const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click",function(evt){
    evt.preventDefault() // no longer refresh in this case if we add this line of code
    // alert("submitted")
        
})
//next step we gonna do some simply to-do list here
const input1 = document.querySelector("#input1");
const ul = document.querySelector(".todo")
btn2.addEventListener("click",function(evt){
const list = document.createElement("li")
list.innerText = input1.value
list.innerHTML = list.innerHTML +"<button>Edit</button>"
ul.appendChild(list)
input1.value = "" // make the input element empty after appended
})
