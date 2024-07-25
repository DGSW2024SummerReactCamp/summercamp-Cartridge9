// import {useState} from 'react'

const TodoEditor = ({settodo, todo, push}) => {
  const saveTodo = (e) => {
    settodo(e.target.value);
  };
  const onKeydown = (e) => {
    if ( e.key === 'Enter' && e.nativeEvent.isComposing === false ){
      e.preventDefault();
      push()
    }
  }
  return (
    <div className="TodoEditor">
      <h1>새로운 할일 작성하기</h1>
      <input type="text" placeholder='할일을 작성해주세요!' value={todo} onChange={saveTodo} onKeyDown={onKeydown} />
      <button onClick={push}>작성</button>
    </div>
  )
}

export default TodoEditor