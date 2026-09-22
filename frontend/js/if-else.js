let useremail = "myemailemail.com"
const EMAIL_REG = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

if (EMAIL_REG.test(useremail)){ // true
    // console.log("Email is correct")
} else { // false
    // console.log("Given format is incorrect")
}

let userMark    = 45
let totalMarks  = 70
let bands       = 7

if (userMark >= 40 && userMark <= totalMarks) {
    if (bands >=6 && bands <= 8) {
        // console.log("You can apply now")
    } else {
        // console.log("Band is low you can not apply")
    }
} else {
    // console.log("You can not apply for the admission")
}
// ----------------



function checkDayWithNumber() {
    let number = document.getElementById("no").value
    if(number == 1) {
        console.log("Monday")
    } else if (number == 2) {
        console.log("Tuesday")
    } else if (number == 3) {
        console.log("Wednesday")
    } else if (number == 4) {
        console.log("Thursday")
    } else if (number == 5) {
        console.log("Friday")
    } else if (number == 6) {
        console.log("Saturday")
    } else if (number == 7) {
        console.log("Sunday")
    } else {
        console.log("Invalid entry")
    }
}