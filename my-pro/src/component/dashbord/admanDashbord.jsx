import React from 'react'
import Hader from '../others/hader'

function AdmanDashbord() {
  return (
    <div className=' h-screen w-full p-10'>
      <Hader/>

      <div className='bg-[#1c1c1c] mt-7 rounded  p-5'>
        <form action="" className='flex flex-wrap items-start justify-between '>
           <div className='w-1/2'>
                <div>
                     <h3 className='text-sm text-gray-300 mb-0.5'>tasktitel</h3>
                     <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='make a ui ux designe'/>
                </div>
                <div>
                     <h3 className='text-sm text-gray-300 mb-0.5'>date</h3>
                    <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>asigne to</h3>
                    <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='employ name ' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>type</h3>
                    <input className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text"  placeholder='design , dev , ui/ux  ,etc'/>
                </div>
                </div>
            <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>discription </h3>
                <textarea className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols={30} rows={10}></textarea>
                
            </div>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>create task </button>
            
        </form>
      </div>
    </div>
  )
}

export default AdmanDashbord
