import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return
        addTodo(value, category)
        setValue("")
        setCategory("")
    }

    return (
        <section className="todo-form">
            <h2>Nova Tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite a Tarefa"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudo">Estudo</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </section>
    )
}