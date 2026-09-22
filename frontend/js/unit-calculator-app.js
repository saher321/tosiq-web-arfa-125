function calculateBill () {

    // input / output
    let cUnit = document.getElementById("consumed-unit").value
    let result = document.getElementById("total-amt")
    let total = 0
    // taxes
    const gst       = 1980
    const fat       = 670
    const selfTax   = 230
    const subsidy   = 250

    // units price
    const regUnit   = 37
    const resUnit   = 45
    const comUnit   = 75
    const extraUnit = 102

    // range
    if (cUnit >= 100 && cUnit <= 200) {
        total = (cUnit * regUnit) + (gst + fat + selfTax) - subsidy
    } else if (cUnit >= 201 && cUnit <= 300) {
        total = (cUnit * resUnit) + (gst + fat + selfTax)
    } else if (cUnit >= 301 && cUnit <= 400) {
        total = (cUnit * comUnit) + (gst + fat + selfTax)
    } else if (cUnit >= 401) {
        total = (cUnit * extraUnit) + (gst + fat + selfTax)
    }

    // output
    result.innerHTML = `<strong>RS ${total}/-</strong>`

}