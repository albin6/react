import React, { useState } from 'react'

function ButtonCounter() {
    const [counter, setCounter] = useState(0)
    function incrementCounter() {
        setCounter(prev => prev + 1)
    }
    function decrementCounter() {
        setCounter(prev => prev - 1)
    }
    function resetCounter() {
        setCounter(0)
    }
    return (
        <div>
            <label>Click Count {counter}</label> <br />
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}

export default ButtonCounter