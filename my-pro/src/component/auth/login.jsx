import React, { useState, useSyncExternalStore } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const sumbitHandler =(e)=>{
    e.preventDefault()
    console.log( "email is " ,email)
    console.log( "password is ", password)
    setEmail("")
    setPassword("")
  }


  return (
   <>
   <div className='flex items-center justify-center h-screen w-screen bg-black text-white'>
      <div className='border-2 border-emerald-600  rounded-2xl'>
          <form 
          onSubmit={(e)=>{
               sumbitHandler(e)
          }}
          action="" className='flex flex-col items-center justify-center text-white p-20 '> 
            <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)

            }}
             required
              className=' border-2 border-emerald-600 py-3 text-xl outline-none bg-transparent px-5 rounded-full placeholder:text-white' type="email" placeholder='enter your email ' />
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
             className=' border-2 border-emerald-600 py-3 text-xl outline-none bg-transparent px-5 rounded-full placeholder:text-white mt-10' type="password" placeholder='enter your password ' />
            <button className=' mt-7 border-2 py-3 text-xl outline-none  px-5 rounded-full  bg-blue-400'> login </button>
          </form>
      </div>
   </div>
   
   
   </>
  )
}

export default Login
