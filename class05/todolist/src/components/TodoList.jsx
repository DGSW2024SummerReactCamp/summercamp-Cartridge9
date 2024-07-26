import React, { useState, useContext, } from 'react'
import '../App.css'
import { useMemo } from 'react'
import { TodoStateContext, TodoDispatchContext } from '../App';

const TodoList = () => {
  
  const { DoList } = useContext(TodoStateContext)
  const { deleteTodo, updateTodo } = useContext(TodoDispatchContext)

  const [search, setSearch] = useState('')
  
  
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearchResult = () => {
    return search === ""
    ? DoList
    : DoList.filter((it)=>it.text.toLowerCase().includes(search.toLowerCase()));
  }


  const analyzeApp = useMemo(() =>{
    const totalCount = DoList.length
    const doneCount = DoList.filter((it)=>it.checked === true).length
    const yetCount = DoList.filter((it)=>it.checked !== true).length
    return(
      [totalCount, doneCount, yetCount]
    )
  }, [DoList])

  // const {totalCount, doneCount, yetCount} = analyzeApp;
  // console.log(analyzeApp)

  return (
    <div className="Todolist">
      <h1>Todo List</h1>
      <div className='analyze'>
        <div>총개수 : {analyzeApp[0]}</div>
        <div>다한일 : {analyzeApp[1]}</div>
        <div>덜한일 : {analyzeApp[2]}</div>
      </div>
      <input type="search" className='Todosearch' placeholder='검색' onChange={onChangeSearch} />
      {
        getSearchResult().length !== 0
        ? (getSearchResult().map((value, key)=>(
            <div className='todoitem' key={key}>
              <input type='checkbox' className='checked' onChange={()=>{updateTodo(value.id)}} ></input>
              <span className='text'>{value.text}</span>
              <span className='time'>{value.time}</span>
              <button className='delete' onClick={()=>{deleteTodo(value.id)}}>삭제</button>
              {/* <div>{value.id}</div> */}
            </div>
          ))
        )
        : <div className='nonetext'>할 일을 추가해주세요.</div>
      }
    </div>
  )
}

export default TodoList