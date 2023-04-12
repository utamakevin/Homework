import { useState } from "react"
import { useRef } from "react"
import './Bank.css'

function Bank () {
    const [balance, setBalance] = useState(0)
    const inputRef = useRef(null)

    function handleDeposit() {
        let inputValue = Number(inputRef.current.value)
        setBalance(balance + inputValue)
    }
    
    function handleWithdraw() {
        let inputValue = Number(inputRef.current.value)
        setBalance(balance - inputValue)
    }

    return (
        <div className="bank">
            <span>Bank</span>
            <span className="balance">Balance: {balance}</span>
            <input ref={inputRef} type="number"/>
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
}

export default Bank