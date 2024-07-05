// **Activity 1**
// let age = 19
// let country = "France"
// if((age > 17) && (country == "UK")){
//     console.log("Yes I can serve you.")
// }else{
//     console.log("You either aren't old enough or not in the UK.")
// }

// **Activity 2**
// let toppings = "Onions"
// switch(toppings){
//     case "Chicken":
//         console.log("All the meats!")
//         break
//     case "Meatballs":
//         console.log("All the meats!")
//         break
//     case "Ground beef":
//         console.log("All the meats!")
//         break
//     case "Bacon":
//         console.log("All the meats!")
//         break
//     case "Onions":
//         console.log("Excellent choice, one of my favourites")
//         break
//     case "Sweetcorn":
//         console.log("Excellent choice, one of my favourites")
//         break
//     case "Pepperoni":
//         console.log("All the meats!")
//         break
//     case "Pineapple":
//         console.log("You are banned from this establishment")
//         break
//     case "Tuna":
//         console.log("You are banned from this establishment")
//         break
//     case "Anchovies":
//         console.log("You are banned from this establishment")
//         break
//     default:
//         console.log("Please try a different topping.")
// }

// **Activity 3**
// let password = "completelysafepassword"
// if(password.length < 8){
//     console.log("Password is too short.")
// }
// else{
//     console.log(password)
// }

// let num = 4
// if(num % 3 == 0 || num % 5 == 0){
//     console.log("This number is divisible by 3 or 5")
// }else{
//     console.log("This number is divisible by neither 3 nor 5")
// }

// **Activity 4**
// let num = 4
// if(num % 3 == 0 && num % 5 == 0){
//     console.log("Fizzbuzz")
// }else if(num % 3 == 0){
//     console.log("Fizz")
// }else if(num % 5 == 0){
//     console.log("Buzz")
// }else{
//     console.log(num)
// }

// **Activity 5**
// let num = 2001
// let numStr = num.toString()
// let reversedStr = numStr.split('').reverse().join('')
// if(numStr == reversedStr){
//     console.log(`${num} is a palindrome.`)
// }
// else{
//     console.log(`${num} is not a palindrome.`)
// }

// **Activity 6**
// let time = 1900
// let placeOfWork = "the office"
// let townOfHome = "home"
// if(time >= 0 && time < 630){
//     console.log(`At ${time}, I'm trying to sleep.`)
// }else if(time >= 630 && time < 800){
//     console.log(`At ${time}, I'm at ${townOfHome}.`)
// }else if(time >= 800 && time < 900){
//     console.log(`At ${time}, I'm commuting.`)
// }else if(time >= 900 && time < 1700){
//     console.log(`At ${time}, I'm at ${placeOfWork}.`)
// }else if(time >= 1700 && time < 1800){
//     console.log(`At ${time}, I'm on my way home.`)
// }else if(time >= 1800 && time < 2400){
//     console.log(`At ${time}, I'm at ${townOfHome}.`)
// }else{
//     console.log(`That's not a valid time.`)
// }

// **Activity 7**
// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// const vowels = "aeiouAEIOU"
// let lastVowelIndex = -1
// for(let i = str.length - 1; i >= 0; i--){
//     if(vowels.includes(str[i])){
//         lastVowelIndex = i
//         break
//     }
// }
// console.log(`The index of the last vowel is ${lastVowelIndex}.`)

// **Activity 8**
// let word = "abracadabra"
// let isSame = word[0] === word[word.length - 1]
// console.log(isSame)

// **Activity 9**
let num1 = 5
let num2 = 5
let sum = num1 + num2
let result = ""
if(sum % 2 == 0){
    result = sum
}else{
    result = num1 * num2
}
console.log(result)