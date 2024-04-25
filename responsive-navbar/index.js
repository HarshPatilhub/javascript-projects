document.addEventListener("DOMContentLoaded", function (e) {
    const menuIcons = document.querySelector("#menuIcons")
const menuList = document.querySelector("#menuList")
menuIcons.addEventListener("click",function(){
    menuList.classList.toggle("active") 
})
})