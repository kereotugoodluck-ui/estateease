import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const visitotAdded = () => {
  return (
    <div className='flex justify-center items-center inset-0 bg-black/60'>

      <div className='flex justify-center items-center flex-col absolute'>
      
        <div className='bg-white rounded-full p-8 mb-4'>
          <Image src="/Vector (3).svg" alt='' width={60} height={60}/>
        </div>
        <p className='text-white text-bold text-xl'>successful</p>
      </div>

      <div className='opacity-10 mb-50'>
        <div className='px-8 mt-5'>
          <p className='text-gray-500 text-[13px]'>Hello <span className='font-bold'>Clayton</span></p>
          <p className='text-gray-500 text-[9px]'>Expecting a visitor? Kindly fill in the necessary information about your visitor.</p>
       </div>

        <div className='relative mt-7 px-8'>
          <label className='absolute -top-3.5 left-15  px-3 text-xl text-gray-600 font-bold text-[19px]'>
            Full name
          </label>
          <input name='Full name' className='w-full rounded-xl border-gray-600 border pt-6 pb-2'/>
        </div>

        <div className='relative mt-5 px-8'>
          <label className='absolute -top-3.5 left-15  px-3 text-xl text-gray-600 font-bold text-[19px]'>
            Email
          </label>
          <input name='Email' className='w-full rounded-xl border-gray-600 border pt-6 pb-2'/>
        </div>

        <div className='relative mt-5 px-8'>
          <label className='absolute -top-3.5 left-15  px-3 text-xl text-gray-600 font-bold text-[19px]'>
            Phone number
          </label>
          <input name='Phone number' className='w-full rounded-xl border-gray-600 border pt-6 pb-2'/>
        </div>

        
        <div>
          <div className='flex justify-center items-center flex-row gap-6.5'>
            <div className='relative mt-5  pb-5'>
              <label className='absolute -top-3.5 left-3  px-1 text-xl text-gray-700 font-bold'>Date in</label>
              <input name='Date in' className='w-38 rounded-xl border-gray-800 border px-3 pt-4 pb-4 placeholder: text-gray-600 pl-6' 
              placeholder='dd/mm/yy'/>
           </div>

           <div className='relative mt-5 pb-5'>
              <label className='absolute -top-3.5 left-5  px-1 text-xl text-gray-700 font-bold'>Time in</label>
              <input name='Time in' className='w-38 rounded-xl border-gray-800 border px-3 pt-4 pb-4 placeholder: text-gray-600 pl-6' 
              placeholder='00:00'/>
           </div>
          </div>

          <div className='flex justify-center items-center flex-row gap-6.5'>
            <div className='relative mt-5  pb-5'>
              <label className='absolute -top-3.5 left-3  px-1 text-xl text-gray-700 font-bold'>Date out</label>
              <input name='Date out' className='w-38 rounded-xl border-gray-800 border px-3 pt-4 pb-4 placeholder: text-gray-600 pl-6' 
              placeholder='dd/mm/yy'/>
           </div>

           <div className='relative mt-5 pb-5'>
              <label className='absolute -top-3.5 left-5  px-1 text-xl text-gray-700 font-bold'>Time out</label>
              <input name='Time out' className='w-38 rounded-xl border-gray-800 border px-3 pt-4 pb-4 placeholder: text-gray-600 pl-6' 
              placeholder='00:00'/>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default visitotAdded