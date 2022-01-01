const btn = document.querySelector("button");
const title = document.querySelector("h1");
btn.addEventListener("click",changeColor);
const bodybg = document.querySelector("body");
function changeColor(){
    const r = Math.floor(Math.random()*255 +1);
    const b = Math.floor(Math.random()*255 +1);
    const g = Math.floor(Math.random()*255 +1);
    bodybg.style.backgroundColor = `rgb(${r},${b},${g})`
    bodybg.style.transition = "250ms"
    title.innerHTML = `RGB(${r},${b},${g})`
    title.style.transition = "250ms"
    if ((r+b+g) < 100){
        title.style.color = "white"
    }else{
        title.style.color = "black"
    }
}