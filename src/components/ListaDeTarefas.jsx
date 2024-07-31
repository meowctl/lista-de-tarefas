function ListaDeTarefas () {
    
    const tarefas = ["tarefa 1", "tarefa 2", "tarefa 3"];

    return (
        <ListaDeTarefas>
            {
                tarefas.map((t) => {
                    {t}
                })
            }
        </ListaDeTarefas>
    )
}

export default ListaDeTarefas;