import React from 'react'
import Image from 'next/image'

const successful
 = () => {
  return (
    <div className='flex justify-center items-center inset-0 bg-black/70'>
      <div className='flex justify-center items-center flex-col absolute'>

        <div className='bg-white rounded-full p-4 mb-4'>
          <Image src="/Vector (3).svg" alt='' width={60} height={60}/>
        </div>
        <p className='text-white text-bold text-xl'>successful</p>
      </div>

      <div className='opacity-10'>
            <div className='px-18 py-3 bg-white border-[0.5px] border-gray-300'>
              <p className='text-gray-700 font-semi-bold text-[13px]'>Amount</p>
              <h1 className='text-[#EE7421] text-3xl'>$10.00</h1>
            </div>
      
            <div className='flex justify-center items-center flex-col gap-7 mt-10 mb-50'>
              <p className='text-gray-700 font-normal text-[13px] pr-[160px]'>Payment Method</p>
      
              <button className='bg-white border-[0.5px] border-gray-300 rounded-md px-20 py-3 mt-3 flex    justify-center items-center'>
                <Image src="/Group.svg" alt="" width={100} height={100} />
              </button>
      
              <button className='bg-white border-[0.5px] border-gray-300 rounded-md px-21 py-3 mt-3 flex    justify-center items-center flex-row gap-3'>
                <Image src="/S.svg" alt="" width={30} height={30} />
                <Image src="/Group (1).svg" alt="" width={50} height={50} />
              </button>
      
              <button className='bg-white border-[0.5px] border-gray-300 rounded-md px-16 py-3 mt-3 flex    justify-center items-center flex-row gap-3'>
                <Image src="/bank.svg" alt="" width={30} height={30} />
                <p className='text-gray-700 font-bold text-[14px]'>Bank Transfer</p>
              </button>
      
              <button className='bg-white border-[0.5px] border-gray-300 rounded-md px-19 py-3 mt-3 flex    justify-center items-center gap-3'>
                <Image src="/Layer_1.svg" alt="" width={30} height={30} />
                <p className='text-gray-700 font-bold text-[14px]'>Credit Card</p>
              </button>
            </div>
          </div>
    </div>
  )
}

export default successful
