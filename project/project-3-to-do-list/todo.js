let todo = []
let usercmd = prompt("Enter a command")

while (usercmd!=="quit" && usercmd!== "q"){
    if(usercmd === "new"){
        item = prompt("record your Todo")
        todo.push(item)
        console.log(todo[0])
    }
    else if (usercmd==="list"){
        for (let i of todo){
            console.log(`Todo-${todo.indexOf(i)}:${i}`)
        }
    }
    else if (usercmd==="del"){
         
        
    }
    usercmd = prompt("what's your next move?")


}
console.log("You quit the app")