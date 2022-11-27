import React, { useRef } from "react";

interface ToDoFormProps {
  onAddTask: (what: string) => void;
}

export default function ToDoForm({ onAddTask }: ToDoFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  function addNewTask(e: React.FormEvent) {
    e.preventDefault();
    const newTask = inputRef.current!.value
    onAddTask(newTask)
    inputRef.current!.value = ''
  }

  return (
    <form onSubmit={addNewTask}>
      <input type="text" placeholder="Feed the dragon" ref={inputRef} />
      <button type="submit">Add task</button>
    </form>
  )
}