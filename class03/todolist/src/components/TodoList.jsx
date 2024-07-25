import React from 'react'

const TodoList = ({f}) => {
  let arr = f.map((value, key)=>{
    return(
      <li key={key}>{value.text} {value.time}</li>
    )
  })
  console.log(f)
  return (
    <div className="TodoList">
      <h2>할 일 목록</h2>
      <ul>
        {arr}
      </ul>
    </div>
  )
}

export default TodoList