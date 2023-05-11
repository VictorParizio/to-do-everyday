export default function Filter() {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Inconplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética:</p>
                    <button>Asc</button>
                    <button>Desc</button>
                </div>
            </div>
        </div>
    )
}