const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")
const btn0 = document.querySelector("#btn0")
const btnClr = document.querySelector("#btnClr")
const btnEnter = document.querySelector("#btnEnter")

const deposit = document.querySelector(".deposit")
const withdraw = document.querySelector(".withdraw")

const display = document.querySelector("#display")
const balance = document.querySelector(".balance")

const moreInfo = document.querySelector(".more-info")
const withdrawCount = document.querySelector(".withdraw-counter")



console.log(btn1)





const num1Input = document.querySelector(".num1-input")
const num2Input = document.querySelector(".num2-input")
const p = document.querySelector("p")

let withdrawCounter = 10



function handleInput(e) {

  console.log(`button ${e.target.id} pressed`)
  display.value += e.target.value
}

function handleClear(e) {
    display.value = ""
}

// function handleEnter(e) {
//     balance.value += display.value
//     handleClear
//     return display.value
// }

function handleDeposit(e) {
    let result = Number(balance.textContent) + Number(display.value)
    balance.textContent = result
    moreInfo.textContent = ""

    if(balance.textContent !== 0) {
    document.body.style.backgroundColor = "white"
    }

    display.value = ""
}

function handleWithdraw(e) {
    let result = 0
    
    withdrawCounter--
    
    if(withdrawCounter >= 0) {
        result = Number(balance.textContent) - Number(display.value)

        withdrawCount.textContent = `You are eligible for ${withdrawCounter} free withdrawals.`
        
        } else {
        
        result = Number(balance.textContent) - Number(display.value) - 2
        withdrawCount.textContent = "You are now charged $2 for every withdrawal"
    }
    
    
    if(result > 0) {
        balance.textContent = result
    } else if(result == 0) {
        balance.textContent = result
        document.body.style.backgroundColor = "red"
        moreInfo.style.color = "white"
        moreInfo.textContent = "You are broke."
    } else {
        insufficientFunds()
    }
    display.value = ""

    
}

function insufficientFunds() {
    moreInfo.textContent = "Insufficient funds."
    document.body.style.backgroundColor = "mistyrose"
    moreInfo.style.color = "black"
}


btn1.addEventListener("click", handleInput)
btn2.addEventListener("click", handleInput)
btn3.addEventListener("click", handleInput)
btn4.addEventListener("click", handleInput)
btn5.addEventListener("click", handleInput)
btn6.addEventListener("click", handleInput)
btn7.addEventListener("click", handleInput)
btn8.addEventListener("click", handleInput)
btn9.addEventListener("click", handleInput)
btn0.addEventListener("click", handleInput)
btnClr.addEventListener("click", handleClear)
// btnEnter.addEventListener("click", handleEnter)

deposit.addEventListener("click", handleDeposit)
withdraw.addEventListener("click", handleWithdraw)