import React, { useState } from "react";

export default function TodoList() {
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

    return (
        <section className="todo-list">
            {todos.map((todo) => (
                <div className="todo">
                    <div className="content">
                        <p>{todo.text}</p>
                        <p className="category">
                            ({todo.category})
                        </p>
                    </div>
                    <div>
                        <button>Completar</button>
                        <button>X</button>
                    </div>
                </div>
            ))}
        </section>
    )
}