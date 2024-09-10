import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  username: "hitesh",
  age:21
}


  return (
    <>
   <h1 className='bg-green-400 text-black rounded-xl'>Tailwind test</h1>
   <Card username = "chai aur code" btnText ="click me" />
   <Card username = "hitesh" btnText ="visit me" />
    </>
  )
}

export default App
