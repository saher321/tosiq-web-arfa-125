applyTheme()
function applyTheme () {
    
    // getting value from LS
    let txtClr = localStorage.getItem("txtClr")
    let bgClr = localStorage.getItem("bgClr")
    
    // applying LS value to body
    document.body.style.color = txtClr
    document.body.style.backgroundColor = bgClr
}

function saveThemeSettings () {
    let txtClr  = document.getElementById('txt-color').value
    let bgClr   = document.getElementById('bg-color').value

    // adjusting color to body
    document.body.style.color = txtClr
    document.body.style.backgroundColor = bgClr

    // storing color value
    localStorage.setItem("txtClr", txtClr)
    localStorage.setItem("bgClr", bgClr)

}

function resetToDefault () {
    localStorage.clear()

    
    document.getElementById('txt-color').value = ""
    document.getElementById('bg-color').value = ""
    document.body.style.color = ""
    document.body.style.backgroundColor = ""
}