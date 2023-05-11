import React from "react";

export default function Todo({ todo }) {
    return (
        <section className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">
                    ({todo.category})
                </p>
            </div>
            <div>
                <button className="complete">Completar</button>
                <button className="remove">X</button>
            </div>
        </section>
    )
}