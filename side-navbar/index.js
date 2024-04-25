document.addEventListener("DOMContentLoaded", function (e) {
    const menuIcons = document.querySelector("#menuIcons")
    const menuList = document.querySelector("#menuList")
    const crossIcon = document.querySelector("#crossIcon")
menuIcons.addEventListener("click",function(){
    menuList.classList.toggle("active")
})
crossIcon.addEventListener("click",function(){
    menuList.classList.remove("active")
})
})