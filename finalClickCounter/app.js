let count = 0
let countUp = document.getElementById("count-up")
let countDisplay = document.getElementById("count-display")

countUp.addEventListener("click", function(){
    count += 1 
    countDisplay.textContent = count
})

let saveBtn = document.getElementById("save")
let saveDisplay = document.getElementById("save-display")
saveBtn.addEventListener("click",function(){
    
    saveDisplay.textContent += `${count} | `
    countDisplay.textContent = 0
    count = 0
})

let resetBtn = document.getElementById("reset")
resetBtn.addEventListener("dblclick", function(){
    countDisplay.textContent = 0
    count = 0
    saveDisplay.textContent = ''

})

