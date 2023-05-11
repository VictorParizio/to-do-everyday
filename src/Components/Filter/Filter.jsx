export default function Filter({filter, setFilter, setSort}) {
    return (
        <section className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Inconplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética:</p>
                    <button onClick={()=> setSort("Asc")}>Asc</button>
                    <button onClick={()=> setSort("Desc")}>Desc</button>
                </div>
            </div>
        </section>
    )
}