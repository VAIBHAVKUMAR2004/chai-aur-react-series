import { useState, useCallback,useEffect } from 'react'
import'./App.css'

function App() {
  const [length, setLength] = useState(8);
const [number,setNumber] = useState(false);
const [charAllowed,setCharAllowed] = useState(false);
const [password,setPassword] = useState("");

//useRef hook
const passwordRef = useRef(null)


const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz"
if (number) str += "0123456789"
 if (charAllowed) str += "!@#$%^&*(){}[]"
 for (let i = 1; i <= length; i++) {
  let char = Math.floor(Math.random() * str.length +1)
  pass += str.charAt(char)
}

setPassword(pass)

},[length,number,charAllowed,setPassword])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password)
},[password])
useEffect(() => {},[length,number,charAllowed,passwordGenerator])
  return (
    
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
 <h1 className='text-white text-center'>Password Generator</h1>
 <div className='flex shadow rounded-lg overflow-hidded mb-4'>

 <input type='text'
 value ={password}
 className='outline-none w-full py-1 px-3'
 placeholder='password'
 readOnly
 ref={passwordRef}>

 </input>
 <button
 onClick={copyPasswordToClipboard}
 className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input 
    type='range'
    min= {6}
    max= {100}
    value={length}
    className='cursor-pointer'
    onChange={(e) => {setLength(e.target.value)}}
    ></input>
    <label>Length: {length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input 
    type = "checkbox"
    defaultChecked={number}
    id="numberInput"
    onChange={() => {
      setNumber((prev) => !prev)
    }}></input>
    <label htmlFor='numberInput'>Number</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input 
    type = "checkbox"
    defaultChecked={number}
    id="numberInput"
    onChange={() => {
      setCharAllowed((prev) => !prev)
    }}></input>
    <label htmlFor='characterInput'>Characters</label>
  </div>
  </div>
  </div>
  )
}

export default App
