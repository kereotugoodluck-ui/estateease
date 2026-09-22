import React from 'react'
import link from 'next/link'
import Link from 'next/link'

const balance
 = () => {
  return (
    <div className='bg-[#FFF8DB'>
      <div className='px-18 py-3 bg-white border-[0.5px] border-gray-300'>
        <p className='text-gray-700 font-semi-bold text-[13px]'>Amount</p>
        <h1 className='text-[#EE7421] text-3xl'>$10.00</h1>
      </div>

      <div className='flex justify-center items-center flex-col gap-7 mt-10 mb-50'>
        <p className='text-gray-700 font-semi-bold text-[13px]'>Subscribe to your monthly usage</p>
        <img src="/credit card payment icon.svg" alt="" width={300} height={300} />

        <Link href="/dashboard/payment" className='bg-[#EE7421] text-white px-10 py-3 rounded-md'>
          Make Payment
        </Link>
      </div>
    </div>
  )
}

export default balance
