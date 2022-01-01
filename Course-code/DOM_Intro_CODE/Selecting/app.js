const allImages = document.getElementsByTagName("img")

// for (let img of allImages){
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// }
// document.querySelector("p");

const firstLink = document.querySelector("a");
firstLink.href;
firstLink.getAttribute("href")
const h1 = document.querySelector("h1")
console.log(h1.style)

const h2 = document.querySelector("h2")
// two way to apply a class to a element
// the first way is set attribute class to a class,but this method will overwrite the class attribute
h2.setAttribute("class","purple")
// a better way is to use classList.add/ classList.toggle/ classList.remove
h2.classList.add("border")
// act like a switch
h2.classList.toggle("purple")
const p1 = document.createElement("h2")
p1.innerHTML = "<i> i am the handsomiset chicken<i/>"
const head = document.querySelector("h1")
const button = document.createElement("button")
button.innerText = "submit!";




// head.prepend(p1)
// head.insertAdjacentElement("afterend",p1)
// p1.classList.add("border")
let array=[];
for (i = 0;i < 100;i++){
    const button = document.createElement("button")
    button.textContent = "submit!";
    button.setAttribute("id",i)
    array.push(button)
}

for (let arra of array){
    head.appendChild(arra)
}