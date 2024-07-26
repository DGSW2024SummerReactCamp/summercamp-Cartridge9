import { useMemo } from 'react';
import './App.css';
import Time from './components/Time';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
// import Testcomp from './components/Testcomp';
import { useState, useRef, useReducer } from 'react';
import React from 'react';

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const App = () => {
  const today = new Date()
  const [Todo, setTodo] = useState('');
  const idRef = useRef(0);
  
  const reducer = (state, action) =>{
    switch (action.type){
      case 'CREATE':
        return [...state,action.data];
      case "DELETE":
        return state.filter((it)=>it.id !== action.data);
      case "UPDATE":
        return state.map((item, index)=> index === action.data ? {...item, checked:!item.checked} : item );
      default:
        return state;
    }
  }

  const [DoList, setDoList] = useReducer(reducer, [])

  const pushTodo = () => {
    const to = {
      id : idRef.current,
      text : Todo,
      time : `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`,
      checked : false,
    }
    setTodo('')
    setDoList({
      type:"CREATE",
      data:to
    })
    idRef.current += 1
  }

  const deleteTodo = (itemId) => {
    setDoList({
      type: "DELETE",
      data: itemId
    })
  };

  const updateTodo = (itemId) => {
    setDoList({
      type: "UPDATE",
      data: itemId
    })
  }

  const memoizedDispatchs = useMemo(()=>{
    return {pushTodo, deleteTodo, updateTodo}
  }, [Todo])

  return (
    <div className='App'>
      {/* <Testcomp/> */}
      <Time  />
      <TodoStateContext.Provider value={{Todo, setTodo, DoList, setDoList}}>
        <TodoDispatchContext.Provider value={memoizedDispatchs}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>

    </div>

  );
}

export default App;
