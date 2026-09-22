import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const dashboard
 = () => {
  return (
    <div className="bg-[#FFF8DB]">
      <div className="px-8">

        <div className='bg-white mt-10 mb-10'>

         <div className="flex items-center gap-3 px-5 py-5">
           <Image src="/wallet.svg" alt="Logo" width={30} height={30} />
           <h1 className="text-gray-600 font-bold text-[18px]">View Balance Due</h1>
         </div>

         <div className="px-5 pb-5">
           <p className='text-gray-600 pb-5'>
            This is a monthly payment for app usage. Your subscription gives you optimum benefits and flexibility.
           </p>

           <Link href="/dashboard/balance" className="text-red-500 font-bold">
             click here
           </Link>
         </div>
        </div>

        <div className='bg-white mt-10 mb-10'>

         <div className="flex items-center gap-3 px-5 py-5">
           <Image src="/visitors.svg" alt="Logo" width={30} height={30} />
           <h1 className="text-gray-600 font-bold text-[18px]">My Visitors</h1>
         </div>

         <div className="px-5 pb-5">
           <p className='text-gray-600 pb-5'>
            Have the ability to invite your friends, loved ones and family without any delay or worries.
           </p>

           <Link href="dashboard/addvisitor" className="text-red-500 font-bold">
             click here
           </Link>
         </div>
        </div>

        <div className='bg-white mt-10 mb-30'>

         <div className="flex items-center gap-3 px-5 py-5">
           <Image src="/card.svg" alt="Logo" width={30} height={30} />
           <h1 className="text-gray-600 font-bold text-[18px]">Payments</h1>
         </div>

         <div className="px-5 pb-5">
           <p className='text-gray-600 pb-5'>
            All payments made and history are view and made from here. There are different methods to pay or subscribe
           </p>

           <Link href="/dashboard/payment" className="text-red-500 font-bold">
             click here
           </Link>
         </div>
        </div>



      </div>
    </div>
  )
}

export default dashboard
