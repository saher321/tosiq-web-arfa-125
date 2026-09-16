function findFTemp () {
    var c = document.getElementById("cel").value

    var f = (c * 9/5) + 32

    var res = document.getElementById("result")
    res.innerHTML = "Result: " + f + " F&deg;"
}