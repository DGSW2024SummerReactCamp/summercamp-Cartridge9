import React, { useState } from 'react'

const Say = () => {
  const [message, setMessage] = useState('버튼을 눌러주세요.');
  const [color, setClolor] = useState('black')
  const onClickenter = () => setMessage('안녕하세요.');
  const onClickleave = () => setMessage('안녕히가세요.');
  return (
    <div>
        <button onClick={onClickenter}>입장</button>
        <button onClick={onClickleave}>퇴장</button>
        <h1 style={{color}}>{message}</h1>
        <button onClick={()=>setClolor('red')}>
            빨갱
        </button>
        <button onClick={()=>setClolor('blue')}>
            파랭
        </button>
        <button onClick={()=>setClolor('yellow')}>
            노랭
        </button>
    </div>
  )
}

export default Say;