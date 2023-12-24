import './App.css';
import TodoTable from './componentes/TodoTable';


function App() {

const fazeres = [
  {rowNumber: 1, rowDescription: 'Alimentar o Gato', rowDesignado: 'Lulu'},
  {rowNumber: 2, rowDescription: 'Regar o cacto', rowDesignado: 'EUa'},
  {rowNumber: 3, rowDescription: 'Matar alguém', rowDesignado: 'EU'},
  {rowNumber: 4, rowDescription: 'Matar alguém', rowDesignado: 'EU'},
  {rowNumber: 5, rowDescription: 'Matar alguém', rowDesignado: 'EU'},
]

  const Addtodo = () => {
    if (fazeres > 0){
      const NewTodo = {
        rowNumber: fazeres.length + 1,
        rowDescription: 'new todo',
        rowDesignado: 'new user'
      }
      fazeres.push( NewTodo);

    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable fazeres={fazeres}/>
          <button className='btn btn-primary' onClick={Addtodo}>Add new todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
