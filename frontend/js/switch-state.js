function printDay() {
    let number = Number(document.getElementById("no").value)
    let res = document.getElementById("result")
    switch (number) {
        case 1:
            res.innerHTML = "Monday"
            break;
        case 2:
            res.innerHTML = "Tuesday"
            break;
        case 3:
            res.innerHTML = "Wednesday"
            break;
        case 4:
            res.innerHTML = "Thursday"
            break;
        case 5:
            res.innerHTML = "Friday"
            break;
        case 6:
            res.innerHTML = "Saturday"
            break;
        case 7:
            res.innerHTML = "Sunday"
            break;
        default:
            res.innerHTML = "Invalid entry"
    }

}