const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")

const value = document.querySelector("#value")
let count = 0;

decrease.addEventListener("click",(e)=>{
   count = count - 1;
   value.innerHTML = count
   value.style.color = "orange"
})
increase.addEventListener("click",(e)=>{
   count = count + 1;
   value.innerHTML = count
   value.style.color = "green"
})

reset.addEventListener("click",()=>{
  count = 0;
  value.innerHTML = count
  value.style.color = "red";
})
