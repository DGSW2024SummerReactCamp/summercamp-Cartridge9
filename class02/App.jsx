import { useState } from 'react';
import './App.css';
import Viewer from './Viewer'; // Viewer.jsx import
import Counter from './Counter'; // Counter.jsx import

const App = () => {
  const [count, setCount] = useState(0); // Viewer에 표시하기 위해 useState count 생성, 초기값 0
  return (
    <div>
      <h2>Simple Counter</h2> {/* 제목 */}
      <Viewer cnt={count} /> {/* Viewer의 cnt에 count를 전달 */}
      <Counter cnt={setCount}/> {/* Counter의 cnt에 setCount를 전달 */}
    </div>
  );
}

export default App;
