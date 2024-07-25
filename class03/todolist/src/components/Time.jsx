import React from 'react'
import '../App.css'

const Time = () => {
  return (
    <div className="Time">
      <h3>현재 시간은?</h3>
      <h2>{new Date().toDateString()}</h2>
    </div>
  )
}

export default Time;