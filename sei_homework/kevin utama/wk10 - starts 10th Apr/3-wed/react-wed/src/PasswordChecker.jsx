import { useState } from "react"
import './PasswordChecker.css'


function PasswordChecker() {
    const [strength, setStrength] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function handleChange(e) {
        if (e.target.value.length === 0) {
            setStrength('')
        } else if (e.target.value.length < 6) {
            setStrength('weak')
        } else if (e.target.value.length < 13) {
            setStrength('medium')
        } else {
            setStrength('strong')
        }
    }

    function handleTick() {

        setShowPassword(!showPassword)

        
    }

    // const showPassword = true

    return (
        <div className="password-checker">
            <span className="title">Password Strength Detector</span>
            <input type={showPassword ? 'text' : 'password'} onChange={handleChange} />
            <span>{strength}</span>
            <div className="checkbox">
                <input type="checkbox" onChange={handleTick} />
                <span>show password</span>
            </div>
        </div>
    )
}

export default PasswordChecker