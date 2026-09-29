// Array Methods
// length, sort(), push(), pop(), unshift(), shift()
// concat(), toSpliced(), splice(), isArray(), reverse()
// flat(), filter(), map(), find(), reduce(), some()

// indexes       0         1        2        3
const arr1 = ["Purple", "Black", "White", "Orange"]
const countries = ["Pakistan", "UAE", "SA", 'RU']
// console.log(arr1[2])
// console.log(arr1)
// console.log("Length of arr1 is:", arr1.length)
// arr1.reverse()
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
// const mergedArray = [ "NEW ITEM", ...arr1, ...countries ]
// console.log(mergedArray)

// arr1.splice(index Number, mode(0 => add item, 1 => remove item), "value")
// arr1.splice(0, 0, "Green")
// arr1.splice(2, 1, "Green")
// console.log(arr1)

// const newArray = arr1.toSpliced(2,1, "NEW TIEM")
// console.log(newArray)


// const status = true
// const result = Array.isArray(arr1)
// console.log(result)

// let str = arr1.toString()
// console.log(str)


// const nestedArray = [ [ 1, 2 ], [ 3, 5], [ 78, 99] ]
// const singleArray = nestedArray.flat()
// console.log(singleArray)

const employees = [
    {id: 101, name: "Alexander", salary: 75000, status: "active"},
    {id: 102, name: "Elon Musk", salary: 70000, status: "inactive"},
    {id: 103, name: "Spowderman", salary: 100000, status: "inactive"},
    {id: 104, name: "Alice", salary: 175000, status: "active"},
    {id: 105, name: "Sam", salary: 49000, status: "inactive"},
]

showEmployees(employees)
function showEmployees (emps) {
    let tbl = document.getElementById("tbl")
    emps.map((emp) => {
        tbl.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.salary}</td>
            <td>${emp.status}</td>
        </tr>
        `
    })
}

function getStatus () {
    let status = document.getElementById("status").value
    let tbl = document.getElementById("tbl")

    tbl.innerHTML = ""
    
    if (status == "all"){
        showEmployees(employees)
    } else {
        const filteredEmployees = employees.filter(
            (emp) => emp.status == status 
        )
        showEmployees(filteredEmployees)
    }


}

// filter method
// let status = "inactive"
// const filteredEmployees = employees.filter(
//     (emp) => emp.status == status 
// )
// console.log(filteredEmployees)

// find method
// let id = 102
// const emp = employees.find((emp) => emp.id == id)
// console.log(emp)
// if (emp) {
//     console.log(emp)
// } else {
//     console.log("Employee not found")
// }

// reduce method

// let salary = employees.reduce((sum, emp) => sum + emp.salary, 0)
// console.log('Total salary:', salary)
