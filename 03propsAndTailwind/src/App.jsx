import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Deba",
    age: 21
  }
  let myArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-blue-600 text-black p-4 rounded-3xl'>Tailwind Test</h1>
      <div className="flex gap-10">
        <Card username="Debasis" btnText="click me" />
        <Card username="Neha" />
      </div>
    </>
  )
}

export default App
