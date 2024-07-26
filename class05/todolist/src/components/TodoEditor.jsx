import { useContext } from "react";
import { TodoStateContext, TodoDispatchContext } from '../App';

const TodoEditor = () => {
  const { Todo, setTodo } = useContext(TodoStateContext)
  const { pushTodo } = useContext(TodoDispatchContext)
  
  const saveTodo = (e) => {
    setTodo(e.target.value);
  };

  const onKeydown = (e) => {
    if ( e.key === 'Enter' && e.nativeEvent.isComposing === false ){
      e.preventDefault();
      pushTodo()
    }
  }

  return (
    <div className="TodoEditor">
      <h1>새로운 할일 작성하기</h1>
      <input type="text" placeholder='할일을 작성해주세요!' value={Todo} onChange={saveTodo} onKeyDown={onKeydown} />
      <button onClick={pushTodo}>작성</button>
    </div>
  )
}

export default TodoEditor