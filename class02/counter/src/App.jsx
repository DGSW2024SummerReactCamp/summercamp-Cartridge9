import { useState, useEffect, useRef } from 'react';
import './App.css';
import Viewer from './components/Viewer'; // Viewer.jsx import
import Counter from './components/Counter'; // Counter.jsx import
import Even from './components/Even';

const App = () => {
  const didMount = useRef(0)
  const handleText = (e) => {
    setText(e.target.value)
  }
  const [text, setText] = useState('');
  const [count, setCount] = useState(0); // Viewer에 표시하기 위해 useState 생성

  // Component Mount
  // 두번째 parameter가 없음 , 라이프 사이클 중 마운트 시 실행
  useEffect(()=>{
    console.log("Component Mount")
  }, [])

  // state Update
  // 두 개의 상태변수 존재, 둘 중 하나만 변경되어도 실행
  useEffect(() => {
    console.log(`업데이트 : ${text} ${count}`)
  }, [count, text])

  // Component Update
  // 두번째 parameter가 없음 , useRef 를 사용해서 마운트 상태를 제외한 모든 업데이트 상황에서 실행 ( 마운트될때 didMount 값 변경해주기 )
  useEffect(()=>{
    if ( !didMount.current ){
      didMount.current = true;
      return;
    } else{
      console.log("Componetn Update")
    }
  })
  
  // Component Unmount
  // 두번째 parameter가 없음 , 모든 업데이트에서 실행
  useEffect(()=>{ 
    const IntervalID = setInterval(()=>{
      console.log("깜빡")
    }, 1000);
    // 라이프 사이클 중 언마운트시 실행
    return ()=>{
      console.log('Cleanup')
      clearInterval(IntervalID)
    }
  })

  return (
    <div>
      <h2>Simple Counter</h2> {/* 제목 */}
      <section>
        <input type="text" value={text} onChange={handleText} />
      </section>
      <Viewer cnt={count} /> {/* Viewer의 cnt에 count를 전달 */}
      {{count}%2===0 && <Even />}
      <Counter cnt={setCount}/> {/* Counter의 cnt에 count를 전달 */}
    </div>
  );
}

export default App;
