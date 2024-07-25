import React, { useState } from 'react'
import '../App.css'

const TodoList = ({list,setlist}) => {
  const [search, setSearch] = useState('')
  
  
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearchResult = () => {
    return search === ""
    ? list
    : list.filter((it)=>it.text.toLowerCase().includes(search.toLowerCase()));
  }

  const deleteTodo = (itemId) => {
    setlist({type:"DELETE",data:itemId});
  }

  const updateTodo = (itemId) => {
    setlist({type:"UPDATE", data:itemId})
  }


  const analyzeApp = () =>{
    const totalCount = list.length
    const doneCount = list.filter((it)=>it.checked === true).length
    const yetCount = list.filter((it)=>it.checked !== true).length
    return(
      [totalCount, doneCount, yetCount]
    )
  }

  const analyze = analyzeApp();

  return (
    <div className="Todolist">
      <h1>Todo List</h1>
      <div>
        <div>총개수 : {analyze[0]}</div>
        <div>다한일 : {analyze[1]}</div>
        <div>덜한일 : {analyze[2]}</div>
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