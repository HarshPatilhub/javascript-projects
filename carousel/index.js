const data = [
    {
        "id": 1,
        "img": "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
        "name": "James Wilson",
        "role": "Frontend Developer",
        "desc": "Seeking a passionate web developer to transform ideas into captivating online experiences. If you thrive on turning code into creativity and enjoy collaborating with cross-functional teams, come join us in creating websites that leave a lasting impression"
    },
    {
        "id": 2,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyAhd1agNxFweS2786uiQzLEVOflcs4Wu8KEWwFngqA&s",
        "name": "Ethan Brown",
        "role": "Full Stack Developer",
        "desc": "Attention web enthusiasts! We're on the lookout for a talented developer to join our ranks. If you have a knack for problem-solving, a passion for clean code, and a desire to stay ahead in the ever-evolving tech world, this role is perfect for you."
    },
    {
        "id": 3,
        "img": "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
        "name": "Liam Anderson",
        "role": "UI/UX Designer & Developer",
        "desc": "Elevate your career as a web developer and join our innovative team where your ideas matter. From building user-friendly interfaces to implementing backend functionalities, you'll play a pivotal role in shaping our digital presence and driving business success."
    },
    {
        "id": 4,
        "img": "https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x",
        "name": "Benjamin Martinez",
        "role": "Backend Developer",
        "desc": "Are you a web development whiz with a flair for innovation? Join our collaborative environment where creativity meets technology. As a web developer, you'll have the opportunity to tackle exciting challenges and contribute to projects that make a real impact."
    },
    
]

const forw = document.querySelector("#forw")
const back = document.querySelector("#back")
const nickname = document.querySelector("#nickname")
const myimage = document.querySelector("#image")
const myrole = document.querySelector("#role")
const description = document.querySelector("#desc")
let currentIndex = 0;

forw.addEventListener("click",function (e) {
       nickname.textContent = data[currentIndex].name
       myimage.src = data[currentIndex].img
       myrole.textContent = data[currentIndex].role
       description.textContent = data[currentIndex].desc
       currentIndex++;
       if (currentIndex >= data.length) {
        currentIndex = 0
       }
    })

back.addEventListener("click",function (e) {
       nickname.textContent = data[currentIndex].name
       myimage.src = data[currentIndex].img
       myrole.textContent = data[currentIndex].role
       description.textContent = data[currentIndex].desc
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = data.length - 1;
    }
})

