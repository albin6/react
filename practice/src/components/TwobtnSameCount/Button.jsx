import React, { useState } from 'react'

function Button({count, onClick}) {
    return (
      <div>
        <button onClick={onClick}>Click count {count}</button>
      </div>
    )
  }

export default Button