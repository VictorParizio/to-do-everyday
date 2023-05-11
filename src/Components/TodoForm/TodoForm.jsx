import React from "react";

export default function TodoForm(){
    return(
        <section className="todo-form">
            <h2>Criar Tarefa:</h2>
            <form>
                <input type="text" placeholder="Digite a Tarefa" />
                <select>
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