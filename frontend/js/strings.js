// STRING METHODS
// length, concat, includes, startsWith, endsWith
// charAt, indexOf, lowerCase, upperCase, slice
// substring, split, padStart, padEnd

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

let list = "Apple,Bnana,Orange,Mango,Shoes"

const listArray = list.split(",")
console.log(listArray[2])

let dateTime = "2024-04-01T10:32:50.6917"