import './App.css'
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';

function App() {


  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />

      <div className="row">
        <div className="col-6 text-left">
          Buy something
        </div>
        <div className="col-4 text-left">
          4/10/2023
        </div>
        <div className="col-2">
          <button type='button' className='btn btn-danger p-2'>
            delete
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-6 text-left">
          Go to Shop
        </div>
        <div className="col-4 text-left">
          4/10/2023
        </div>
        <div className="col-2">
          <button type='button' className='btn btn-success p-2'>
            delete
          </button>
        </div>
      </div>

    </center>
  )
}

export default App
