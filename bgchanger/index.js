const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const mainsection = document.querySelector(".main-section")

one.addEventListener("click", function (e) {
    mainsection.style.backgroundColor = "violet"
})
two.addEventListener("click", function (e) {
    mainsection.style.backgroundColor = "indigo"
})
three.addEventListener("click", function (e) {
    mainsection.style.backgroundColor = "blue"
})
four.addEventListener("click", function (e) {
    mainsection.style.backgroundColor = "green"
})
five.addEventListener("click", function (e) {
    mainsection.style.backgroundColor = "yellow"
})
six.addEventListener("click", function (e) {
    mainsection.style.backgroundColor = "orange"
})
seven.addEventListener("click", function (e) {
    mainsection.style.backgroundColor = "red"
})