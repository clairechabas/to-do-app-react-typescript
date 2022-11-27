import React, { useState } from 'react';
import './App.css';
import Greeter from './components/Greeter'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import type ToDo from './types/todo'

function App() {
  const [todos, setTodos] = useState<ToDo[]>([])
  const addTask = (what: string) => {
    const uuid = window.crypto.randomUUID()

    setTodos([...todos, { id: uuid, what, isDone: false }])
  }

  return (
    <div className="App">
      <Greeter person="Claire" />
      <ToDoForm onAddTask={addTask} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
