// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let body = document.querySelector("body")

let clearButton = document.createElement("button")
let colorMatchButton = document.createElement("button")
colorMatchButton.textContent = "Current Color Match"
clearButton.textContent = "Clear Board"
body.append(clearButton, colorMatchButton)


let currentColor = document.querySelector("#current-color")
const colors = document.querySelectorAll(".color")
let cells = document.querySelectorAll(".cell")

for(color of colors){
  color.addEventListener("click", (evt) => {
    currentColor.setAttribute("style", `background: ${evt.target.style.background}`)
  })
}

for(let i = 0; i < cells.length; i++){
  cells[i].addEventListener("click", (evt) => {
    cells[i].setAttribute("style", `background: ${currentColor.style.background}`)
  })
}

clearButton.addEventListener("click", (evt) => {
  for(let i = 0; i < cells.length; i++){
    cells[i].setAttribute("style", "background: white")
  }
})

colorMatchButton.addEventListener("click", (evt) => {
  for(let i = 0; i < cells.length; i++){
    cells[i].setAttribute("style", `background: ${currentColor.style.background}`)
  }
})