import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const passwordRef = useRef(null) //useRef hook

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$%^&~?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-400'>
        <h1 className='text-3xl text-center text-amber-200'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-1'>
          <input type="text" value={password} className='outline-none w-full px-3 py-1' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:text-cyan-950'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-6 w-full'>
          <div className='flex text-center gap-x-1'>
            <input type="range" min={8} max={50} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label htmlFor='lenght' className='text-xl relative bottom-1'>Length: {length}</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {setNumberAllowed((prev) => !prev)
            }} />
            <label htmlFor="numberInput" className='text-xl relative bottom-1'>Number</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={() => {setCharAllowed((prev) => !prev)
            }} />
            <label htmlFor="characterInput" className='text-xl relative bottom-1'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
