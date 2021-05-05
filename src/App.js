import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Todoitem from './Todoitem';
import Todolist from './Todolist';
import Addtsk from './Addtsk';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './taskReducer';

function App() {
  const store = createStore(taskReducer);

  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
        <Addtsk />
        <Todolist />
      </Provider>
    </div>
  );
}

export default App;
