//KATA 1
function add (x , y) {
    return x + y
}

console.log(add (5, 9))
console.log(add (4, 8))
console.log(add (7, 1))

//KATA 2
//function multiply (x , y) {
//    return ("i").repeat(x).repeat(y).length
//}

function multiply (x , y) {
    let total = 0
    for (let index = 0; index < y; index += 1) {
        total = add(x , total)
    }
    return total
}

console.log(multiply (2, 8))
console.log(multiply (7, 6))
console.log(multiply (9, 5))

//KATA 3
function power(x , y) {
    let total = 1
    for (let index = 0; index < y; index+= 1) {
        total = multiply(x , total)
    }
    return total
}

console.log(power (2, 7))
console.log(power (3, 6))
console.log(power (5, 4))

//KATA 4
function factorial(x) {
    if (x === 1)
    return 1;
    for (let index = x - 1; index >= 1; index--) {
        x *= index;
    }
    return x
}

console.log (factorial(4))
console.log (factorial(8))
console.log (factorial (5))