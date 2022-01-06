// const hello = document.querySelector("#hello");
// hello.addEventListener("click",console.log("hello"));
// const goodbye = document.querySelector("#goobye");
// goodbye.addEventListener("click",console.log("goobye"));

const form = document.querySelector('form');
const productName = document.querySelector("#product")
const qty = document.querySelector("#qty");
const btn = document.querySelector('button');
const ul = document.querySelector("#list");

btn.addEventListener("click",function(evt){
    evt.preventDefault();
    const name = productName.value;
    const qulity = qty.value;
    const li = document.createElement("li")
    li.innerText = `${qulity} ${name}`;
    ul.append(li)
    productName.value = ""
    qty.value = ""
    
});