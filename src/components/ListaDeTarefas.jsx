import "./css/ListaDeTarefas.css"

function ListaDeTarefas(props) {
    return (
        <div className="lista">
            <div id="titulo">
                <h2>Lista de tarefas</h2>
            </div>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export default ListaDeTarefas;