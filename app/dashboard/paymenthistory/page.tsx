import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PaymentHistory
 = () => {
  return (
    <div className='bg-[#FFF8DB] '>
      <div className='px-18 py-3 bg-white border-[0.5px] border-gray-300'>
        <p className='text-gray-700 font-semi-bold text-[13px]'>Amount</p>
        <h1 className='text-[#EE7421] text-3xl'>$0.00</h1>
      </div>

      <div className='mb-30'>
        <div>
          <p className='text-gray-600 ml-7 mt-10 mb-3 font-bold'>Payment History</p>
          <div>
            <Image src='/Vector (4).svg' alt='' width={20} height={20} className='absolute pt-3 ml-10' />
            <input name='full name' className='w-70 rounded-xl bg-[white] px-1 pt-2 pb-2 ml-7 placeholder:text-gray-600 pl-10' placeholder='search'/>
          </div>
          <p className='text-gray-600 text-[12px] ml-7 mt-1.5'>21 December, 2023</p>
        </div>

        <Link href='/full' className='flex justify-between items-center flex-row mt-2.5 mb-60'>
          <div className='flex flex-row items-center gap-1.5 mr-4'>
            <Image src='/Vector (5).svg' alt='' width={15} height={15} className='pt-2 pb-2 ml-7 bg-[#EE7421] w-10 h-8 rounded-[8px]' />
            <div>
              <p className='text-gray-600 text-[10px] font-bold'>Clayton Murungu</p>
              <p className='text-gray-600 text-[8px] font-bold'>payment</p>
            </div>
          </div>
          
          <div className='mr-5'>
            <p className='text-gray-600 text-[10px] font-bold'>$10.00</p>
            <p className='text-gray-600 text-[8px] font-bold'>To:Estate</p>
          </div>
        </Link>

        <Link href="/dashboard/payment" className='bg-[#EE7421] text-white px-10 py-3 rounded-md ml-45 mt-20'>
          Make Payment
        </Link>
      </div>


    </div>
  )
}

export default PaymentHistory
