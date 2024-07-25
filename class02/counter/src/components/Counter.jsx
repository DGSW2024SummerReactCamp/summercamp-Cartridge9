import React from 'react'
import '../App.css';

const Counter = ({cnt}) => { // cnt 받아오기
  const onClickp = (number) => {
    cnt((prev)=>prev += number); // prev : 이전 값, 이를 사용해 이전 값에다 호출될 때 받아온 number 더한 후 cnt 변경
  }
  return (
    <div class="container">
        <button onClick={()=>{onClickp(1)}}>+1</button> {/* onClick 시 onClickp 호출 */}
        <button onClick={()=>{onClickp(10)}}>+10</button>
        <button onClick={()=>{onClickp(100)}}>+100</button>
        <button onClick={()=>{onClickp(-1)}}>-1</button>
        <button onClick={()=>{onClickp(-10)}}>-10</button>
        <button onClick={()=>{onClickp(-100)}}>-100</button>
    </div>
  )
}

export default Counter