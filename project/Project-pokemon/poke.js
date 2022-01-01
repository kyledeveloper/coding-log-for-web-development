// sourse link  thinks to github
const basUrl = "https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/"
// larget number is tested to be 898
const imgdiv = document.querySelector(".list");


function displayPrint(i){
    setTimeout(function(){
        const label = document.createElement("span")
        const img = document.createElement("img");
        const pokediv = document.createElement("div")
        label.innerHTML = `#${i + 1}`;
        img.src = `${basUrl}${i + 1}.png`;
        img.classList.toggle("pokemon")
        pokediv.appendChild(img);
        pokediv.appendChild(label);
        imgdiv.appendChild(pokediv);
    },15*i)
   
}
function start(){
for  (let i = 0; i < 151; i++) {
    displayPrint(i)
}
}
// const  btn2 = document.querySelector("#v2")
// It just set the "onclick" attribute equal to start() 
// btn2.onclick = start;
// if we want to add another function that link to onclick, it just simply overwrite the onclick and do the last modify 
const btn3 = document.querySelector("#v3")
// if we use addEventListener, we can add muli-action
btn3.addEventListener("click",start,{once:true})
// https://developer.mozilla.org/en-US/docs/Web/events  this is events reference
