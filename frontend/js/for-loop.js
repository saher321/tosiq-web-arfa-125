// variable initialization
// condition
// increament / decreament

for (let i = 1; i <= 20; i++){
    console.log(i, "I love pakistan")
}

// i = 1; 1 <= 20 => i love pakistan; i++
// i = 2; 2 <= 20 => i love pakistan; i++
// i = 3; 3 <= 20 => i love pakistan; i++
// i = 20; 20 <= 20 => i love pakistan; i++
// i = 21; 21 <= 20 => condition false

for (let j = 1; j <= 10; j++) {
    if (j%2 == 0) {
        console.log(j, "Even number")
    }
}

let sum = 0
for (let a = 1; a <= 10; a++){
    sum = sum + a
}
console.log("Total amount:", sum)