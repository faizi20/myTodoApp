import React, { useState } from 'react'
import './App.css';
import TodoInput from './components/Todo/TodoInput/TodoInput';
import TodoList from './components/Todo/TodoList/TodoList';

function App() {
  const [todoGoals, setTodoGoals] = useState([
    {id: 1, text: 'Nice Work'},
    {id: 2, text: 'Good Day'}
  ])
  const addItemHandler = (enteredText) =>{
    setTodoGoals(prevGoals => {
      const updateGoals = [...prevGoals]
      updateGoals.unshift({text: enteredText, id: Math.random().toString()})
      return updateGoals;
    })
  }
  const onDeleteItemHandler = (goalId) =>{
    setTodoGoals(prevGoals =>{
      const updateGoals = prevGoals.filter(goal => goal.id !== goalId)
      return updateGoals
    })
  }
  return (
    <div>
      <section id="goal-form">
        <TodoInput onAddItem = {addItemHandler} />
      </section>
      <section id="goals">
        {todoGoals.length > 0 ? <TodoList items={todoGoals} onDeleteItem={onDeleteItemHandler} /> : <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>}
      </section>
    </div>
  );
}

export default App;
