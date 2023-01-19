import './App.css';
import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const[text,setText] = useState("");
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  return (
    <div>
      <div className='class1 my-1'>
      <p>Enter your name: <input type={text} value={text} onChange={handleOnChange}></input></p> &ensp;
      <Welcome title={text}></Welcome>
      </div>
      

      <p>Assignment done by Ayush Singh Parihar 12010440</p>
    </div>
  );
}

export default App;
