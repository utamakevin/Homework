import { useState } from 'react'

export default function PasswordChecker() {
    const [password, setPassword] = useState('')
    const [isPasswordShown, setIsPasswordShown] = useState('false')
    
    function handleUpdate(e) {
        setPassword(e.target.value)
        checkPass(password)
    }

    function checkPass(password) {
        let result = {}
        let booleanArr = []

        // 1 point for lower case letters
        const lowerCaseTest = /[a-z]/.test(password) ? result.hasLowerCase = true : result.hasLowerCase = false
        
        // 1 point for upper case letters
        const upperCaseTest = /[A-Z]/.test(password) ? result.hasUpperCase = true : result.hasUpperCase = false
        
        // 1 point for numbers
        const numberTest = /[0-9]/.test(password) ? result.hasNumber = true : result.hasNumber = false

        // 1 point for non alpha numeric characters
        const nonAlphaNumericTest = /[\W_]/g.test(password) ? result.hasNonAlphaNumeric = true : result.hasNonAlphaNumeric = false

        // 1 point for 8 characters or more
        const isOver8CharTest = password.length >= 8 ? result.isOver8Char = true : result.isOver8Char = false

        // 1 more point for 12 characters or more
        const isOver12CharTest = password.length >= 12 ? result.isOver12Char = true : result.isOver12Char = false
        
        for(const key in result) {
            booleanArr = [...booleanArr, result[key]]
        }

        // console.log(result)
        // return result.score = booleanArr.filter(elem => elem === true).length
        // result.score = booleanArr.filter(elem => elem === true).length
        return booleanArr
    }

    function passStrength(passTest) {
        const result = ['','weak sauce','poor','almost there','strong','whoa mate','pain in the butt to remember and type']

        return result[passTest]
    }

    const passedTestCount = checkPass(password).filter(elem => elem === true).length

    let showPasswordTest = isPasswordShown ? 'password' : 'text'

    return (
        <div className="PasswordChecker">
            <span>password </span>
            <input onChange={handleUpdate} type={showPasswordTest} />
            <span> {passStrength(passedTestCount)}</span>
            <div>
            <input onChange={() => setIsPasswordShown(!isPasswordShown)} type="checkbox" />
            <span>show password</span>
            </div>
        </div>
    )
}