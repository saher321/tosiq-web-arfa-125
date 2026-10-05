// STRING METHODS
// length, concat, includes, startsWith, endsWith
// charAt, indexOf, lowerCase, upperCase, split,
// slice, substring, padStart, padEnd, 
// repeat, replace, replaceAll

const EMAIL_REGIX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let str1 = "Hello World"
let email= "myemail@gmail.com"
// console.log(str1.length)
// let newStr = str1.concat(" ", email)
// let newStr = str1 + " " + email
// let newStr = `${str1} ${email}`
// console.log(newStr)

let checkEmail = email.includes("@")
let dotCom = email.includes(".com")
// if (checkEmail && dotCom) {
//     console.log("Email is valid")
// } else {
//     console.log("Email is not valid")
// }
// if (EMAIL_REGIX.test(email)) {
//     console.log("Email is valid")
// } else {
//     console.log("Email is not valid")
// }

// let url = "mywebsite"

// let checkUrl = url.startsWith("https://")
// let checkUrlEnd = url.endsWith(".com")
// if (checkUrl && checkUrlEnd) {
//     console.log("URL is correct")
// } else {
//     console.log("URL is incorrect")
//     let fineURL = `https://${url}.com`
//     console.log("Fine url is: ", fineURL)
// }

// let list = "Apple,Bnana,Orange,Mango,Shoes"

// const listArray = list.split(",")
// console.log(listArray[2])

// let dateTime = "2024-04-01T10:32:50.6917"
// output: 2024-04-01
// let dateOnly = dateTime.split("T")[0]     
// let dateOnly = dateTime.split("T")[1].split(".")[0]
// console.log(dateOnly)

// slice, substring, padStart, padEnd, 
// repeat, replace, replaceAll

let paragraph = "A quick brown fox jumps over the lazy dog"
// let newData = paragraph.slice(7,10)
// console.log(newData)
// let newData = paragraph.substring(0,7)
// console.log(newData)

let price = "2444"
// let newPrice = price.padEnd(4, "/-")
let newPrice = `$${price}`
// console.log(newPrice)

let text = `Lorem Ipsum is simply dummy text of 
the printing and typesetting industry. 
Lorem Ipsum has been the industry's 
standard dummy text ever since 1966`

// let newText = text.replace("Lorem", "Condition")
let newText = text.replaceAll("Lorem Ipsum", "Condition")
console.log(newText)

// 3.6 => ceil floor
let symbol = "I love pakistan. "
let repeatedText = symbol.repeat(100)
console.log(repeatedText)