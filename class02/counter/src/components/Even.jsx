import {useEffect} from 'react'

const Even = () => {
  useEffect(()=>{
    return ()=>{
      console.log('Even Unmount')
    }
  }, [])
  return (
    <div>짝수입니다.</div>
  )
}

export default Even;