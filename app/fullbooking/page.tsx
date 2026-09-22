import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const fullBooking = () => {
  return (
    <div className='bg-[#FFF8DB]'>

      <div className='px-18 py-5 bg-white border-[0.5px] border-gray-300 pt-5'>
        <Link href="dashboard/bookings">
          <h1 className='text-gray-800 text-5xl'>&#8592;</h1>
        </Link>
      </div>

      <div className='flex flex-col gap-3 px-8 pt-5'>
        <p className='text-gray-600 text-[12px]'>Thursday, 21 December, 10:23am</p>
        <p className='text-gray-600 text-[10px]'>Details</p>
      </div>

      <div className='ml-8 mt-5 pt-2.5 pb-2.5 pl-5 rounded-[6px] w-80 bg-white border-[0.5px] border-gray-300 flex items-center gap-2'>
        <Image src="/prince.svg" alt="" width={100} height={100} className='rounded-[10px]'/>
        <div>
          <p className='text-gray-600 text-[12px]'>Full Name</p>
          <p className='text-gray-600 text-[14px] font-bold'>Alex Jumbo</p>
        </div>
      </div>

      <div className='mb-50'>
        <div className='ml-8 mt-5 pt-3 pb-3 rounded-[6px] pl-3 pr-3 w-80 bg-white border-[0.5px] border-gray-300'>
          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Phone number</p>
            <p className='text-gray-600 text-[10px]'>+263775437194</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Email</p>
            <p className='text-gray-600 text-[10px]'>alexjumbo56@yahoo.com</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Date in</p>
            <p className='text-gray-600 text-[10px]'>10 December, 2023</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Date out</p>
            <p className='text-gray-600 text-[10px]'>10 December, 2023</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Time in</p>
            <p className='text-gray-600 text-[10px]'>9:30</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Time out</p>
            <p className='text-gray-600 text-[10px]'>12:45</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Time spent</p>
            <p className='text-gray-600 text-[10px]'>Two hours fifteen minutes</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Purpose of visit</p>
            <p className='text-gray-600 text-[10px]'>Official</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Address</p>
            <p className='text-gray-600 text-[10px]'>Sarafina Str, Mandela Avenue</p>
          </div>
      </div>

      </div>

    </div>
  )
}

export default fullBooking