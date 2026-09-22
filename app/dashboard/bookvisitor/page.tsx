import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BookVisitor = () => {
  return (
    <div className='bg-[#FFF8DB]'>
      <div className='flex flex-col justify-center items-center gap-9 mb-48'>
        <p className='text-gray-600 text-[15px] mt-5'>No visitors yet</p>
        <Image src="/add visitor icon.svg" alt="" width={200} height={200} />
        <Link href="addvisitor" className='bg-[#EE7421] text-white px-20 py-2 rounded-md ml-8'>
          AddVisitor 
        </Link>
      </div>
    </div>
  )
}

export default BookVisitor