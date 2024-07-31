import './App.css';
import Tarefa from './components/Tarefa';
import ListaDeTarefas from './components/ListaDeTarefas';

function App() {
  let tarefas=["tarefa 1", "tarefa 2", "tarefa 3"];

  return (
    <>
      <ListaDeTarefas>
        {tarefas.map((tarefa, i) => <Tarefa key={i} tarefa={tarefa}></Tarefa>)}
      </ListaDeTarefas>
    </>
  )
}

export default App;
