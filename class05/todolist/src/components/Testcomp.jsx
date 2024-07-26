import { useReducer } from "react";

const reducer = ( state, action ) => {
  switch (action.type){
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data
    case 'INIT':
      return 0;
    default:
      return state;
  }
}

const Testcomp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  
  return (
    <div>
      <h4>테스트</h4>
      <div>
        <b>{count}</b>
      </div>
      <div>
        <button onClick={()=> {dispatch({type: 'INCREASE', data:1})}}>+</button>
        <button onClick={()=> {dispatch({type: 'DECREASE', data:1})}}>-</button>
        <button onClick={()=> {dispatch({type: 'INIT'})}}>X</button>
      </div>
    </div>
  )
}

export default Testcomp