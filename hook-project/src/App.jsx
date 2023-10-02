import { useState } from 'react'

import './App.css'

function App() {
  let [count, setcount] = useState(0)
  const addValue=()=>{
    // console.log("Yoo Whats app your updated number is ",count);
    count=count+1;
    if(count>30){
      alert("It is a Greater than 30 ")
    }
    else{
    setcount(count)
    }
  }
  const decreaseVal=()=>{
    count=count-1;
    if(count<0){
      alert("It is a negative number")
    }
    else{
    setcount(count)
    }
  }
  return (
    <>
      <h1 className='font-bold text-3xl text-violet-600'>Chai or react</h1>
      <h2>Count Value : {count}</h2>
      <button onClick={addValue} className=' hover:borde-5 hover:border-blue-500 hover:rounded-full'>Add Value</button><br /> 
      <button onClick={decreaseVal} className='hover:borde-5 hover:border-red-500 hover:rounded-full'>Decrease Value</button>
    </>
  )
}

export default App
