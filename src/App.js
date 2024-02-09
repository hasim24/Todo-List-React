import './App.css';
import Todo from './To-do list/Todoapp';
import { store } from './Slices/Store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}


export default App;
