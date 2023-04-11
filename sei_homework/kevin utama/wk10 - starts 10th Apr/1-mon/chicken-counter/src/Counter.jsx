import './Counter.css'
import { useState } from 'react'

function Counter() {
    let [count, setCount]= useState(0)

    function handleAdd() {
        setCount(count + 1)
    }

    function handleSubtract() {
        setCount(count - 1)
    }
    
    function handleReset() {
        setCount(0)
    }

    function isZero() {}

    return (
        <article className="counter">
            <p>Chicken</p>
            <button onClick={handleSubtract} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleReset}>reset</button>
        </article>
    )
}

export default Counter