import React, { useState } from 'react'
import Todo from './Components/Todo/Todo'
import './App.css'
import TodoForm from './Components/TodoForm/TodoForm'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ])

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      },
    ]

    setTodos(newTodos)
  }

  return (
    <section className='app'>
      <h1>Lista de Tarefas</h1>
      <TodoForm  addTodo={addTodo}/>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </section>
  )
}