// Local storage
// let email = "myemail@gmail.com"
// localStorage.setItem("useremail", email)
// localStorage.getItem("useremail")
// localStorage.removeItem("useremail")
// localStorage.clear()

function saveData () {
    let name = document.getElementById("n").value
    localStorage.setItem("username", name)
    showData()
}
showData()
function showData () {
    let res = document.getElementById("result")

    res.innerText = localStorage.getItem("username")
}

function resetLS () {
    localStorage.clear()
    showData()
}