//cau 1
function student(name, age, address) {
    var object = {
        name: name,
        age: age,
        address: address
    }
    return object;
}
console.log(student("Minh Duc", 16, "Vinh city"))
//cau 2
var smartphone = [
    { name: 'iphone', price: 649} ,
    { name: 'Galaxy S6', price: 576},
    { name: 'Galaxy Note 5', price: 489}
]
function price() {
   var price = smartphone.map((price) => price.price)
   return price
}
//cau 3
const foo = (x, y, z) => {
   console.log()
}

const foo2 = () => {
    alert('Hello')
}

const foo3 = (a, b) => {
    let m = a+b*100
    return m
}

//cau 4
const info = {
    name: "Minh Son",
    age: "10",
    address: "Da Lat"
}

localStorage.setItem("info", JSON.stringify(info))