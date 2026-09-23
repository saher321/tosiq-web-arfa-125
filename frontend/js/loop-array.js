// variable initialization
// condition
// increament / decreament

for (let i = 1; i <= 20; i++){
    // console.log(i, "I love pakistan")
}

// i = 1; 1 <= 20 => i love pakistan; i++
// i = 2; 2 <= 20 => i love pakistan; i++
// i = 3; 3 <= 20 => i love pakistan; i++
// i = 20; 20 <= 20 => i love pakistan; i++
// i = 21; 21 <= 20 => condition false

for (let j = 1; j <= 10; j++) {
    if (j%2 == 0) {
        // console.log(j, "Even number")
    }
}

let sum = 0
for (let a = 1; a <= 10; a++){
    sum = sum + a
}
// console.log("Total amount:", sum)

// __________________________

// indexes            0         1          2
const categories = ["Foods", "Sports", "Wearing", "Shoes"]
// console.log(categories[3])
console.log(categories.sort())
// Arrays
// length, sort(), push(), pop(), unshift(), shift()
// concat(), toSpliced(), splice(), isArray()
// flat(), map(), filter(), find(), reduce(), some()

// const fArray = [[1,2], [3,4], [5,6]]
// fArray.flat() => [1,2,3,4,5,6]

for (let x=0; x < categories.length; x++) {
    console.log(categories[x])
}
// -----------


const testCentres = ["Lahore", "Islamabad", "Sargodha"]

let list = document.getElementById("list")

// list.innerHTML += "<option>" + testCentres[0] + "</option>"
// list.innerHTML += "<option>" + testCentres[1] + "</option>"
// list.innerHTML += "<option>" + testCentres[2] + "</option>"
for(let z=0; z < testCentres.length; z++) {
    list.innerHTML += "<option>" + testCentres[z] + "</option>"
}