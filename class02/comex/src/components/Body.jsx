import {useState} from 'react'

const Body = () => {
  const handleOnChange = (e) => setText(e.target.value)
  const handleOnChangedate = (e) => setDate(e.target.value)
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  return (
    <div>
      <input type="text" value={text} onChange={handleOnChange} />
      <br />
      <input type="date" value={date} onChange={handleOnChangedate}/>
      <div>{text}</div>
      <div>{date}</div>
    </div>
  );
};

export default Body;