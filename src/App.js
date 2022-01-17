import './App.css';
import Addtask from './components/Addtask';
import Task from './components/Task';

function App() {

return(
<div className="App">

<div className="container">

<h1 className=""> TO DO TASKS LIST</h1>

<Addtask/>
<Task/>
</div>
</div>


);

}
export default App;