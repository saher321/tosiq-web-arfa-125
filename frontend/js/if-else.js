let useremail = "myemailemail.com"
const EMAIL_REG = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

if (EMAIL_REG.test(useremail)){ // true
    console.log("Email is correct")
} else { // false
    console.log("Given format is incorrect")
}

let userMark    = 45
let totalMarks  = 70
let bands       = 7

if (userMark >= 40 && userMark <= totalMarks) {
    if (bands >=6 && bands <= 8) {
        console.log("You can apply now")
    } else {
        console.log("Band is low you can not apply")
    }
} else {
    console.log("You can not apply for the admission")
}