"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const AddVisitor = () => {
  // ✅ Moved useState inside component
  const [visitorSuccessful, setVisitorSuccessful] = useState(false);

  return (
    <div className='bg-[#FFF8DB]'>
      <div className='mb-52'>
        <div className='px-8 mt-5'>
          <p className='text-gray-500 text-[13px]'>Hello <span className='font-bold'>Clayton</span></p>
          <p className='text-gray-500 text-[9px]'>Expecting a visitor? Kindly fill in the necessary information about your visitor.</p>
        </div>

        <div className='relative mt-7 px-8'>
          <label className='absolute -top-3.5 left-15 px-3 text-xl text-gray-600 font-bold text-[19px] bg-[#FFF8DB]'>
            Full name
          </label>
          <input name='Full name' className='w-full rounded-xl border-gray-600 border pt-6 pb-2'/>
        </div>

        <div className='relative mt-5 px-8'>
          <label className='absolute -top-3.5 left-15 px-3 text-xl text-gray-600 font-bold text-[19px] bg-[#FFF8DB]'>
            Email
          </label>
          <input name='Email' className='w-full rounded-xl border-gray-600 border pt-6 pb-2'/>
        </div>

        <div className='relative mt-5 px-8'>
          <label className='absolute -top-3.5 left-15 px-3 text-xl text-gray-600 font-bold text-[19px] bg-[#FFF8DB]'>
            Phone number
          </label>
          <input name='Phone number' className='w-full rounded-xl border-gray-600 border pt-6 pb-2'/>
        </div>

        <div>
          <div className='flex justify-center items-center flex-row gap-6.5'>
            <div className='relative mt-5 pb-5'>
              <label className='absolute -top-3.5 left-3 px-1 text-xl text-gray-700 font-bold bg-[#FFF8DB]'>Date in</label>
              <input name='Date in' className='w-38 rounded-xl border-gray-800 border px-3 pt-4 pb-4 placeholder:text-gray-600 pl-6' 
              placeholder='dd/mm/yy'/>
            </div>

            <div className='relative mt-5 pb-5'>
              <label className='absolute -top-3.5 left-5 px-1 text-xl text-gray-700 font-bold bg-[#FFF8DB]'>Time in</label>
              <input name='Time in' className='w-38 rounded-xl border-gray-800 border px-3 pt-4 pb-4 placeholder:text-gray-600 pl-6' 
              placeholder='00:00'/>
            </div>
          </div>

          <div className='flex justify-center items-center flex-row gap-6.5'>
            <div className='relative mt-5 pb-5'>
              <label className='absolute -top-3.5 left-3 px-1 text-xl text-gray-700 font-bold bg-[#FFF8DB]'>Date out</label>
              <input name='Date out' className='w-38 rounded-xl border-gray-800 border px-3 pt-4 pb-4 placeholder:text-gray-600 pl-6' 
              placeholder='dd/mm/yy'/>
            </div>

            <div className='relative mt-5 pb-5'>
              <label className='absolute -top-3.5 left-5 px-1 text-xl text-gray-700 font-bold bg-[#FFF8DB]'>Time out</label>
              <input name='Time out' className='w-38 rounded-xl border-gray-800 border px-3 pt-4 pb-4 placeholder:text-gray-600 pl-6' 
              placeholder='00:00'/>
            </div>
          </div>

          <div className='relative mt-5 px-8'>
            <label className='absolute -top-3.5 left-15 px-3 text-xl text-gray-600 font-bold text-[19px] bg-[#FFF8DB]'>
              Visitors address
            </label>
            <input name='Visitors address' className='w-full rounded-xl border-gray-600 border pt-6 pb-2'/>
          </div>

          <div className='relative mt-5 px-8'>
            <label className='absolute -top-3.5 left-15 px-3 text-xl text-gray-600 font-bold text-[19px] bg-[#FFF8DB]'>
              Purpose of visit
            </label>
            <input name='Purpose of visit' className='w-full rounded-xl border-gray-600 border pt-6 pb-2'/>
          </div>

          <div className='relative mt-5 px-8 pb-5'>
            <label className='absolute -top-3.5 left-15 px-3 text-xl text-gray-700 font-bold bg-[#FFF8DB]'>Upload visitors image</label>
            <input name='Upload visitors image' className='w-full rounded-xl border-gray-800 border px-3 pt-4 pb-4 placeholder:text-gray-600 pl-6' 
            placeholder='Upload visitors image'/>
          </div>

          <p className='text-gray-500 text-[9px] px-8'>A one time code will be sent to your visitor's mobile number for clearance at the entrance.</p>

          <button onClick={() => setVisitorSuccessful(true)}
            className='bg-[#EE7421] text-white w-80 py-5 rounded-xl flex justify-center items-center ml-8 mt-5'>
            Add Visitor 
          </button>

          {visitorSuccessful && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="text-center">
                <div className="w-44 h-44 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <div className="text-[#f47732] text-7xl font-bold">✓</div>
                </div>
                <h2 className="text-white text-4xl font-bold mt-6">Successful</h2>
                <button
                  onClick={() => setVisitorSuccessful(false)}
                  className="mt-8 bg-[#f47732] text-white font-bold px-10 py-3 rounded-xl"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddVisitor