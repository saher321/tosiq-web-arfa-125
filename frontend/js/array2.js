// Array Methods
// length, sort(), push(), pop(), unshift(), shift()
// concat(), toSpliced(), splice(), isArray(), reverse()
// flat(), map(), filter(), find(), reduce(), some()

// indexes       0         1        2        3
const arr1 = ["Purple", "Black", "White", "Orange"]
const countries = ["Pakistan", "UAE", "SA", 'RU']
// console.log(arr1[2])
// console.log(arr1)
// console.log("Length of arr1 is:", arr1.length)
arr1.reverse()
// console.log(arr1)
const studentMarks = [76, 45, 99, 67, 88, 91]
studentMarks.sort().reverse()
// console.log(studentMarks[1])

// arr1.push("Yellow")
// console.log(arr1)

// arr1.pop()
// console.log(arr1)

// arr1.unshift("Yellow")
// console.log(arr1)

// arr1.shift()
// console.log(arr1)

// const mergedArray = arr1.concat(countries, "NEW ITEM")
const mergedArray = [ "NEW ITEM", ...arr1, ...countries ]
console.log(mergedArray)