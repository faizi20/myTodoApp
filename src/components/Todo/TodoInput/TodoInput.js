import React, { useState } from 'react'
import Button from '../../UI/Button'
import './TodoInput.css'

function TodoInput(props) {
    const [enteredValue, setEnteredValue] = useState();

    const formSubmitHandler = (events) =>{
        events.preventDefault();
        props.onAddItem(enteredValue)
    }

    const goalInputChangeHandler = (events) =>{
        setEnteredValue(events.target.value)
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className='form-control'>
                <label>Todo App</label>
                <input type='text' value={enteredValue} onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoInput