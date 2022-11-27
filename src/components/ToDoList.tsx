import React from "react"
import type ToDo from '../types/todo'

interface ToDoListProps {
  todos: ToDo[];
};

export default function ToDoList({todos}: ToDoListProps): JSX.Element {
  return (
    <div>
      <h1>To Do</h1>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.what}</li>)}
      </ul>
    </div>
  )
}