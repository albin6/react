import './App.css'
import React from 'react'
import IfElse from './components/IfElse'
import ElementVariable from './components/ElementVariable'
import TernaryOperator from './components/TernaryOperator'
import ShortCircuit from './components/ShortCircuit'

function App() {
  return (
    <div>
      <IfElse />
      <ElementVariable />
      <TernaryOperator />
      <ShortCircuit />
    </div>
  )
}

export default App