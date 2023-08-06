
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'

function App() {
  
  return (
  <div className="container bg-secondary mt-5 rounded py-1" style={{minHeight:'70vh'}}>
      <AddTask />
      <ListTask />
    </div>
  ); 
}

export default App;
