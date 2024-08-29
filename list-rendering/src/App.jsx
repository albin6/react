import './App.css'
import React from 'react'
import { persons } from './utils/Persons'
import Person from './components/Person'

function App() {
  return (
    <div>
      {
        persons.map(person => <Person person={person}/>)
      }
    </div>
  )
}

export default App