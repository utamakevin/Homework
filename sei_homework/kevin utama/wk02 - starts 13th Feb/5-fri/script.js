// const resetBtn = document.querySelector("#reset")
// const startBtn = document.querySelector("#start")
// const pauseBtn = document.querySelector("#pause")
// const timer = document.querySelector("#timer")

// let seconds = 0
// let timerId = null
// let i = 0

// resetBtn.addEventListener("click", function() {
//     console.log("reset button clicked")
//     clearInterval(i)
//     seconds = 0
//     timer.textContent = "Stop Watch"
// })

// startBtn.addEventListener("click", function() {
//     console.log("start button clicked")
//     updateTime()
//     timer.textContent = `Time elapsed: ${seconds} s`
//     setInterval(updateTime, 1000)
//     i++
// })

// pauseBtn.addEventListener("click", function() {
//     console.log("pause button clicked")
//     clearInterval(i)
// })



// function updateTime() {
//     seconds++
//     timer.textContent = `Time elapsed: ${seconds} s`
// }


const stopWatch = {

    resetBtn : document.querySelector("#reset"),
    startBtn : document.querySelector("#start"),
    pauseBtn : document.querySelector("#pause"),
    timer : document.querySelector("#timer"),

    seconds : 0,
    timerId : null,
    i : 0,

    updateTime : function() {
        stopWatch.seconds++
        stopWatch.timer.textContent = `Time elapsed: ${stopWatch.seconds} s`
    },

    resetHandler : function() {
        console.log("reset button clicked")
        clearInterval(stopWatch.i)
        stopWatch.seconds = 0
        stopWatch.timer.textContent = "Stop Watch"
    },

    startHandler : function() {
        console.log("start button clicked")
        stopWatch.updateTime()
        stopWatch.timer.textContent = `Time elapsed: ${stopWatch.seconds} s`
        setInterval(stopWatch.updateTime, 1000)
        stopWatch.i++
    },

    pauseHandler : function() {
        console.log("pause button clicked")
        clearInterval(stopWatch.i)
    }
}

stopWatch.resetBtn.addEventListener("click", stopWatch.resetHandler)
stopWatch.startBtn.addEventListener("click", stopWatch.startHandler)
stopWatch.pauseBtn.addEventListener("click", stopWatch.pauseHandler)