import { useState } from "react"


function CreditCardDetector() {

    const [card, setCard] = useState('')
    
    function handleChange(e) {
        console.log(e.target.value)
        if(e.target.value === "34" || e.target.value === "37") {
            setCard('AMEX')
        } 
        if(e.target.value === "6011") {
            setCard('Discover')
        } 
        if(Number(e.target.value) >= 51 && Number(e.target.value) < 56) {
            setCard('MasterCard')
        } 
        if(e.target.value === "4") {
            setCard('Visa')
        } 
        if(e.target.value === "") {
            setCard('')
        } 
    }

    return(
        <div className="credit-card-detector">
            <span>Credit Card Number </span>
            <input type="text" onChange={handleChange}/>
            <span>{card}</span>
        </div>
    )

}

export default CreditCardDetector