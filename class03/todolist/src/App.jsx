import './App.css';
import Time from './components/Time';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { useState } from 'react';

const App = () => {
  const [Todo, setTodo] = useState('');
  const [DoText, setDoText] = useState([]);
  const pushTodo = () => {
    const to = {
      text : Todo,
      time : (new Date()).toDateString(),
    }
    setDoText(DoText.concat(to))
  }
  return (
    <div className='App'>
      <Time  />
      <TodoEditor s={setTodo} t={Todo} push={pushTodo} />
      <TodoList f={DoText} />
    </div>

  );
}

export default App;
