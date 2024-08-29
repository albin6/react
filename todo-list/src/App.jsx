import "./App.css"
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ToDoList from "./component/ToDoList"

function App() {
  const [toDoList, setToDoList] = useState([])
  const [toDo, setToDo] = useState('')
  const inputRef = useRef()

  useEffect(() => inputRef.current.focus())

  function handleClick(e) {
    const task = {
      id : uuidv4(),
      todo : toDo.trim().toLowerCase(),
    }
    const isExists = toDoList.find(x => x.todo === task.todo)
    if (!(isExists)) {
      setToDoList([...toDoList, task])
    } else {
      alert('Task Already Exist!!')
    }
    setToDo('')
  }

  return (
    <div>
      <div>
        {
          toDoList.map(t=> (<ToDoList id={t.id} task={t.todo} />))
        }
      </div>
      <input ref={inputRef} value={toDo} type="text" onChange={(e) => (setToDo(e.target.value))} />
      <button onClick={handleClick}>add task</button>
    </div>
  )
}

export default App