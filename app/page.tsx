import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const page = () => {
  return (
    <div className='bg-[#FFF8DB] pt-20 px-4'>

      <div className='flex justify-between items-center h-16 '>
        <p className="text-[20px] leading-[100%] text-[#EE7421] font-bold">EstateEaze</p>

        <Link className='text-white bg-[#EE7421] px-4 py-2 rounded-md w-40' href="/create-account">Create Account</Link>
      </div>

      <div>
        <p className='text-black text-[15px] border-b w-68 pb-5 mt-10'>Everything at your fingertips</p>

        <h1 className='text-[#EE7421] text-4xl font-bold w-75 mt-7'>Living with ease at the touch of a button...</h1>
      </div>

      <div>
        <Image src="/building and girl.svg" alt="hero" width={500} height={500} className='mt-10' />

        <p className='text-black text-[15px] mt-7 text-3xl '>EstateEaze gives you a feel of heaven.</p>
      </div>

      <div className='flex justify-center gap-4 items-center h-16 mb-10 '>
        <Link href="/login" className='text-[#EE7421] text-center  bg-white px-4 py-2 rounded-md w-40 mt-10'>Login</Link>

        <Link href="/create-account" className='text-white text-center bg-[#EE7421] px-4 py-2 rounded-md w-40 mt-10'>Create Account</Link>
      </div>

    </div>
  )
}

export default page