import React from 'react'
import './App.css';

const Counter = ({cnt}) => { // cnt ( setCount ) 받아오기
  const onClickp = (number) => {
    cnt((prev)=>prev += number); // prev : 이전 값, 이를 이용해 이전 값에다 호출될 때 받아온 number 더한 후 count 값을 변화시키는 함수 생성
  }
  return (
    <div class="container">
        <button onClick={()=>{onClickp(1)}}>+1</button> {/* onClick 시 onClickp 호출 */}
        <button onClick={()=>{onClickp(10)}}>+10</button>
        <button onClick={()=>{onClickp(100)}}>+100</button>
        <button onClick={()=>{onClickp(-100)}}>-100</button>
        <button onClick={()=>{onClickp(-10)}}>-10</button>
        <button onClick={()=>{onClickp(-1)}}>-1</button>
    </div>
  )
}

export default Counter