import React from 'react'
import '../App.css'


const Time = () => {
  return (
    <div className="Time">
      <h1>현재 시간은?</h1>
      <h2>{new Date().toDateString()}</h2>
    </div>
  )
}

export default React.memo(Time);