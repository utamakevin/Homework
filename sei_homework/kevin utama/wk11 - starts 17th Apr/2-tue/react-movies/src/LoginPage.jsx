import { useState } from "react"


export default function LoginPage({ setUser }) {
    const [input, setInput] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setUser(input)
        setInput('')
    }

    return (
    <form onSubmit={handleSubmit} action="">
        <input type="text" onChange={handleChange} value={input}/>
        <button>Submit</button>
    </form>

    )
}