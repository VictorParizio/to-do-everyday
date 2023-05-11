import React from 'react'
import TodoList from './Components/TodoList/TodoList'
import './App.css'

export default function App() {
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <TodoList />
    </div>
  )
}