


let menu = document.querySelector(".menu")
let icons = document.querySelectorAll(".menu-i")
let downMenu = document.querySelector(".nav")
let showLi = document.querySelectorAll(".nav ul li")


menu.onclick = function () {

  //change icons menu && xmark

  for (i = 0; i < icons.length; i++) {
    icons[i].classList.toggle("active")
  }

  //show down menu

  downMenu.classList.toggle("down-menu")

  //show li

  for (i = 0; i < showLi.length; i++) {
    showLi[i].classList.toggle("show-li")
  }
}

//header height
let header = document.querySelector("header")
let mainText = document.querySelector(".main-text")
let headerH = header.offsetHeight
let mainH = mainText.offsetHeight
let minsh = headerH+mainH
document.documentElement.style.setProperty("--mins-height", minsh+"px")
document.documentElement.style.setProperty("--main-mins", headerH+"px")

//skills section

let btns = document.querySelectorAll(".btn-skill")
let skillsContainer = document.querySelectorAll(".skills-list-container")
let buttonsContain = document.querySelector('.buttons')

buttonsContain.onclick = function () {
  btns.forEach(function (btn) {
    btn.classList.toggle("active")
  })
  skillsContainer.forEach(function (skill) {
    skill.classList.toggle("active")
  })
}

//show the name of skill card on click

let skillCard = document.querySelectorAll(".skill-card")



skillCard.forEach(function (card) {
  card.onclick = function () {
    skillCard.forEach(function (card) {
    card.children[0].classList.remove("show-tooltip")
    })
    card.children[0].classList.toggle("show-tooltip")
  }
})

