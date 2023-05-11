import React, { useState } from 'react'
import './App.css'
import Todo from './Components/Todo/Todo'
import TodoForm from './Components/TodoForm/TodoForm'
import Search from './Components/Search/Search'
import Filter from './Components/Filter/Filter'

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

  const [search, setSearch] = useState("")

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

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    )
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(
      (todo) =>
        todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)
  }

  return (
    <section className='app'>
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Filter />

      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo} />
          ))}
      </div>
    </section>
  )
}