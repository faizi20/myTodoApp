import React, { useState } from 'react'
import Button from '../../UI/Button'
import styles from './TodoInput.module.css'

function TodoInput(props) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true)

    const formSubmitHandler = (events) =>{
        events.preventDefault();
        if(enteredValue.trim().length === 0){
            setIsValid(false)
            return
        }
        props.onAddItem(enteredValue)
    }

    const goalInputChangeHandler = (events) =>{
        if(events.target.value.trim().length > 0){
            setIsValid(true)
        } 
        setEnteredValue(events.target.value)
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Todo App</label>
                <input type='text' value={enteredValue} onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoInput