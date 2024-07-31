import './App.css';
import Tarefa from './components/Tarefa';
import ListaDeTarefas from './components/ListaDeTarefas';

function App() {

  return (
    <>
      <ListaDeTarefas>
        <Tarefa tarefa="teste" />
        <Tarefa tarefa="teste" />
        <Tarefa tarefa="teste" />
      </ListaDeTarefas>
    </>
  )
}

export default App;
