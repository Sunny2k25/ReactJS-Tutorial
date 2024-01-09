import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)
  // let counter = 15;

  const addvalue = ()=>{
    counter = counter+1
    setcounter(counter);
    console.log("Value Added",counter);

  }
  const removevalue = () =>{
    setcounter(counter-1);
    console.log(counter);
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value {counter}</h2>
    <button onClick={addvalue}>
      Add Value{counter}
      </button>
    <button onClick={removevalue}>
      Remove Value{counter}</button>
    <p>footer{counter}</p>
    </>
  )
}

export default App
