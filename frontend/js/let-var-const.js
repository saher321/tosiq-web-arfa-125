var cityName = "Lahore"
var cityName = "Peshawar"
console.log(cityName)
// variable can be redeclared and reinitialized

let studentName = "Ali"
studentName = "Sami"
console.log(studentName)
// variable can be not redeclared and but variable can be reinitialized

const status = "inactive"
console.log(status)
// can not be redeclared or reinitialized

var country = "Pakistan"
{
    var country = "UAE"
}
console.log(country)

let color = "Purple"
{
    let color = "Black"
    console.log(color)
}
console.log(color)

const isActive = "yes"
{
    const isActive = "no"
}
console.log(isActive)
// _____________________________ \\

// POINTS

//          var          let         const
// scope    global      block        block
// re-dec    yes         no            no
// re-init   yes         no            no