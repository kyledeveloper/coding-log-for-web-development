const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    if(square(a) + square(b) === square(c)){
        console.log(true)
    }
    

}
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")