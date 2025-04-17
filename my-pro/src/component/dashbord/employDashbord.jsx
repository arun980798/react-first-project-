import React from 'react'
import Hader from '../others/hader'
import Tasklistnumber from '../others/Tasklistnumber'
import Tasklist from '../../taskList/Tasklist'

const EmployDashbord = () => {
  return (
    <>
      <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
      <Hader/>
      <Tasklistnumber/>
      <Tasklist/>
      </div>
    </>
  )
}

export default EmployDashbord
