import React, { useState } from 'react'

function Button() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }
  return (
    <div>
        <button onClick={handleClick}>Click count {count}</button>
    </div>
  )
}

export default Button