// import {useState} from 'react'

const TodoEditor = ({s, t, push}) => {
  const saveTodo = (e) => {
    s(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="TodoEditor">
      <h3>할일 작성하기</h3>
      <input type="text" placeholder='할일을 작성해주세요!' id='todo' value={t} onChange={saveTodo} />
      <button onClick={push}>완료</button>
    </div>
  )
}

export default TodoEditor