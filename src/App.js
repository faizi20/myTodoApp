import React, { useState } from 'react'
import './App.css';
import TodoInput from './components/Todo/TodoInput/TodoInput';
import TodoList from './components/Todo/TodoList/TodoList';

function App() {
  const [todoGoals, setTodoGoals] = useState(
    {id: 1, text: 'Nice Work'},
    {id: 2, text: 'Good Day'}
  )
  const addItemHandler = () =>{
    setTodoGoals()
  }
  return (
    <div>
      <section id="goal-form">
        <TodoInput onAddItem = {addItemHandler} />
      </section>
      <section id="goals">
        {todoGoals.length > 0 ? <TodoList items={todoGoals} /> : <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>}
      </section>
    </div>
  );
}

export default App;
