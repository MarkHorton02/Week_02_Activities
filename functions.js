// **Activity 1**
const factorial = (n) =>{
    if ((n === 0) || (n === 1)){
        return 1
    }else{
        return (n * factorial(n-1))
    }
}
console.log(factorial(33))

// **Activity 2**
let orderCount = 1
const takeOrder = (topping1, topping2) =>{
    console.log(`Order ${orderCount}: Pizza with ${topping1} and ${topping2}.`)
    orderCount++
}
takeOrder("pepperoni", "sausage")
takeOrder("pineapple", "sweetcorn")
takeOrder("onions", "peppers")

// **Activity 3**
// let pinNumber = 1234
// let cashBalance = 800
// const cashDispense = (pinNumberInputted, amountDispensed) =>{
//     if(pinNumberInputted != pinNumber){
//         console.log("Error: Incorrect PIN Number.")
//     }
//     else if(amountDispensed > cashBalance){
//         console.log("Error: Amount withdrawn exceeds remaining balance.")
//     }
//     else{
//         cashBalance -= amountDispensed
//         console.log(`Dispensing £${amountDispensed}. Your new balance is £${cashBalance}.`)
//     }
// }
// cashDispense(1200, 900)
// cashDispense(1234, 900)
// cashDispense(1234, 600)

// Same code but trying to use a function within a function, I think it was hinted for us to do this in the lecture?
let pinNumber = 1234
let cashBalance = 800
const validityCheck = (pinNumberInputted, amountDispensed) =>{
    if(pinNumberInputted != pinNumber){
        console.log("Error: Incorrect PIN Number.")
    }
    else if(amountDispensed > cashBalance){
        console.log("Error: Amount withdrawn exceeds remaining balance.")
    }
    else{
        cashDispense(cashBalance, amountDispensed)
    }
}
const cashDispense = (cashBalance, amountDispensed) =>{
    cashBalance -= amountDispensed
    console.log(`Dispensing £${amountDispensed}. Your new balance is £${cashBalance}.`)
}
validityCheck(1234, 900)
validityCheck(1234, 600)