import { useState } from 'react';
import React from 'react'
import Login from './component/auth/Login';
import EmployDashbord from './component/dashbord/employDashbord';
import Tasklist from './taskList/Tasklist';
import AdmanDashbord from './component/dashbord/admanDashbord';
import Alltask from './component/others/Alltask';


function App() {

  return (
  <>
  <div className='bg-black h-screen'>
    
   <AdmanDashbord/>
    
    </div>
  </>




  )
}

export default App

