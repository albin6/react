import React from 'react'

function ToDoList(props) {
  return (
    <div key={props.id}>
      <label>
        <input type="checkbox" />
        {props.task}
      </label>
    </div>
  )
}

export default ToDoList