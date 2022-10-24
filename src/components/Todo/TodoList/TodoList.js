import React from 'react'
import TodoGoal from '../TodoGoal/TodoGoal'
import './TodoList.css'

function TodoList(props) {
    return (
        <div>
            {props.items.map((goal) => (
                <TodoGoal
                    key={goal.id}
                    id={goal.id}
                >
                    {goal.text}
                </TodoGoal>
            ))}
        </div>
    )
}

export default TodoList