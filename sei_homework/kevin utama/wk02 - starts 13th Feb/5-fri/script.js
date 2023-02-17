const resetBtn = document.querySelector("#reset")
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const timer = document.querySelector("#timer")

let seconds = 0
let timerId = null
let i = 0

resetBtn.addEventListener("click", function() {
    console.log("reset button clicked")
    clearInterval(i)
    seconds = 0
    timer.textContent = "Stop Watch"
})

startBtn.addEventListener("click", function() {
    console.log("start button clicked")
    updateTime()
    timer.textContent = `Time elapsed: ${seconds} s`
    setInterval(updateTime, 1000)
    i++
})

pauseBtn.addEventListener("click", function() {
    console.log("pause button clicked")
    clearInterval(i)
})



function updateTime() {
    seconds++
    timer.textContent = `Time elapsed: ${seconds} s`
}