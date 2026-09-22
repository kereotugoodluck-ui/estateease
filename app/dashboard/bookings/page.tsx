import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Bookings = () => {
  return (
    <div className='bg-[#FFF8DB]'>

      <div className='mb-50'>
        <div>
          <p className='text-gray-600 ml-7 mt-10 mb-3 font-bold'>All bookings</p>
          <div>
            <Image src='/Vector (4).svg' alt='' width={20} height={20} className='absolute pt-3 ml-10' />
            <input name='full name' className='w-70 rounded-xl bg-[white] px-1 pt-2 pb-2 ml-7 placeholder:text-gray-600 pl-10' placeholder='search'/>
          </div>
          <p className='text-gray-600 text-[12px] ml-7 mt-1.5'>21 December, 2023</p>
        </div>

        <Link href='fullbooking/' className='flex justify-between items-center flex-row mt-2.5 mb-80'>
          <div className='flex flex-row items-center gap-1.5 mr-4'>
            <Image src='/Layer_x0020_1.svg' alt='' width={15} height={15} className='pt-2 pb-2 ml-7 bg-[#EE7421] w-10 h-8 rounded-[8px]' />
            <div>
              <p className='text-gray-600 text-[10px] font-bold'>Alex Jumbo</p>
              <p className='text-gray-600 text-[8px] font-bold'>Visited</p>
            </div>
          </div>
          
          <div className='mr-5'>
            <p className='text-gray-600 text-[10px] font-bold'>Official</p>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Bookings