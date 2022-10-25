import React from 'react'
import TodoGoal from '../TodoGoal/TodoGoal'
import './TodoList.css'

function TodoList(props) {
    return (
        <ul className='goal-list'>
            {props.items.map((goal) => (
                <TodoGoal
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    {goal.text}
                </TodoGoal>
            ))}
        </ul>
    )
}

export default TodoList