function findFTemp () {
    // input => 23rere :: Number (input) => 23
    var c = Number(document.getElementById("cel").value)

    if (!c){ // guarded clause
        alert("Please provide valid value")
        return;
    }

    // if (typeof c != "number") {
    //     alert("Provide numbers only")
    //     return;
    // }

    var f = (c * 9/5) + 32

    var res = document.getElementById("result")
    res.innerHTML = "Result: " + f + " F&deg;"
}