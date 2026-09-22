import React from 'react'
import Link from 'next/link'


const fullPayment = () => {
  return (
    <div className='bg-[#FFF8DB]'>
      <div className='px-18 py-3 bg-white border-[0.5px] border-gray-300 pt-9'>
        <h1 className='text-[#EE7421] text-3xl'>$10.00</h1>
      </div>

      <div className='flex flex-col gap-3 px-8 pt-5'>
        <p className='text-gray-600 text-[10px]'>Thursday, 21 December, 10:23am</p>
        <p className='text-gray-600 text-[8px]'>Details</p>
      </div>

      <div className='ml-8 mt-5 pt-1.5 rounded-[6px] pl-1.5 w-80 h-8 bg-white border-[0.5px] border-gray-300'>
        <p className='text-gray-600 text-[10px] font-bold'>Name: Clayton Murunugu</p>
      </div>

      <div className='mb-50'>
        <div className='ml-8 mt-5 pt-3 pb-3 rounded-[6px] pl-3 pr-3 w-80 bg-white border-[0.5px] border-gray-300'>
          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Account redited</p>
            <p className='text-gray-600 text-[10px]'>Estate Ease</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Sender</p>
            <p className='text-gray-600 text-[10px]'>Clayton Murungu</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Receiver Bank</p>
            <p className='text-gray-600 text-[10px]'>Guaranty Trust</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Transaction type</p>
            <p className='text-gray-600 text-[10px]'>Credit card</p>
          </div>

          <div className='flex justify-between flex-row pb-1.5'>
            <p className='text-gray-600 text-[10px]'>Transaction ID</p>
            <p className='text-gray-600 text-[10px]'>0000100estatease01</p>
          </div>

          <div className='flex justify-between flex-row'>
            <p className='text-gray-600 text-[10px]'>Status</p>
            <p className='text-gray-600 text-[10px]'>Success</p>
        </div>
      </div>

        <div className='ml-8 mt-5 pt-3 pb-3 rounded-[6px] pl-3 pr-3 w-80 bg-white border-[0.5px] border-gray-300 mb-8'>
          <p className='text-gray-600 text-[10px]'>
            Ref: 0000100estateease01 From Clayton, Murungu To Estate, Ease Via Credit card, internet payment
          </p>
       </div>

        <Link href="/dashboard/payment" className='bg-[#EE7421] text-white px-5 py-2 rounded-md ml-8'>
         Send again
        </Link>
      </div>
      

      
    </div>
  )
}

export default fullPayment