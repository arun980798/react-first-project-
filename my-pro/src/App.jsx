import { useState } from 'react';
import React from 'react'

function App() {

   let [ counter, setCounter]=  useState(12)

 

  const addValue =() =>{
    console.log("clicked ", counter);
    counter= counter+1 
    setCounter(counter)
  }

  const removeValue =() =>{
    console.log("clicked ", counter);
    counter= counter-1
    setCounter(counter)
  }




  return (
    <div className=' bg-black grid justify-center h-screen align-middle text-white items-center'>
      <h1> counter {counter} </h1>
      <button className=' border-2 border-amber-200 rounded-2xl ' onClick={addValue}> add value {counter} </button>
      <button onClick={removeValue}> remove this line  {counter} </button>
      <h1>footer {counter} </h1>
      
      
    </div>
  )
}

export default App
