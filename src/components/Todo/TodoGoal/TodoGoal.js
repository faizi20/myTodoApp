import React from 'react'
import './TodoGoal.css'

function TodoGoal(props) {
  const onDelete = () => {
    props.onDelete(props.id)
  }
  return (
    <li className='goal-item' onClick={onDelete}>{props.children}</li>
  )
}

export default TodoGoal