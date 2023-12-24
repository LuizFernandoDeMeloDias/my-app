import './App.css';
import TodoTable from './componentes/TodoTable';


function App() {

const fazeres = [
  {rowNumber: 1, rowDescription: 'Alimentar o Gato', rowDesignado: 'Lulu'},
  {rowNumber: 2, rowDescription: 'Regar o cacto', rowDesignado: 'EUa'},
  {rowNumber: 3, rowDescription: 'Matar alguém', rowDesignado: 'EU'}
]


  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable fazeres={fazeres}/>
        </div>
      </div>
    </div>
  );
}

export default App;
