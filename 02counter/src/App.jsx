import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCounter] = useState(5);
  //let count = 5
  const addValue = () =>{
    if(count < 20){
      setCounter(count + 1);
    }
  }
  const removeValue = () =>{
    if(count > 0){
      setCounter(count-1)
    } else{
      count = 0;
    }
  
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Increase value</button>
      <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
