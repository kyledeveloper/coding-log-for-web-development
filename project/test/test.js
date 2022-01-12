const textcontainer = document.querySelector("#username")
const h1 = document.querySelector("h1")
textcontainer.addEventListener("input",function(e){
    h1.innerText =  `Weclome, ${e.target.value}`; 
    e.target.value=''
})
