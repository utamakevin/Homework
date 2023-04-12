import { useState } from "react"
import './PoopTranslator.css'


function PoopTranslator() {
    const [sentence, setSentence] = useState('')

    function handleChange(e) {
        let newWord = []

        e.target.value
        .split(' ')
        .forEach(word => {
            if(word === 'poop') {
                word = '💩'
            } else {
                word = word
            }
            newWord.push(word)
        })
            
        setSentence(newWord.join(' '))
    }

    return (
        <div className="poop-translator">
            <span>Poop Translator</span>
            <input type="text" onChange={handleChange}/>
            <span>{sentence}</span>
        </div>
    )
}

export default PoopTranslator