// First attempt: logging each line individually
// console.log("   |   |   |   ")
// console.log("   |   |   |   ")
// console.log("   |   |   |   ")
// console.log("---------------")
// console.log("   |   |   |   ")
// console.log("   |   |   |   ")
// console.log("   |   |   |   ")
// console.log("---------------")
// console.log("   |   |   |   ")
// console.log("   |   |   |   ")
// console.log("   |   |   |   ")

// Second attempt: starting to use for loops
// let vertical = "   |   |   |   "
// let horizontal = "---------------"
// for (let i = 0; i < 3; i++){
//     console.log(vertical)}
// console.log(horizontal)
// for (let i = 0; i < 3; i++){
//     console.log(vertical)}
// console.log(horizontal)
// for (let i = 0; i < 3; i++){
//     console.log(vertical)}

// Third attempt: using a for loop within a for loop
let vertical = "   |   |   |   "
let horizontal = "---------------"
for (let counter = 0; counter < 2; counter++){
    for (let i = 0; i < 3; i++){
        console.log(vertical)}
    console.log(horizontal)
}
for (let counter = 0; counter < 3; counter++){
        console.log(vertical)
}