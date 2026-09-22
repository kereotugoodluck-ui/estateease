"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'



const header = () => {


  const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/bookvisitor": "Book Visitor",
  "/dashboard/balance": "Balance",
  "/dashboard/payment": "Payment",
  "/dashboard/bookings": "Bookings",
  }

  const pathname = usePathname()
  const title = pageTitles[pathname] || 'Dashboard'


  return (
    
    <div className=''>
      

      <div  className='flex justify-between text-center px-8 pt-10 pb-10 bg-white'>

        <h1 className='text-gray-700 text-[23px]'>{title}</h1>

        <div className='text-black flex justify-center text-center gap-5'>
        <Image src="/Vector (1).svg" alt="Logo" width={20} height={20} />
        <Image src="/Vector.svg" alt="Logo" width={20} height={20} />
        <Image src="/Vector (2).svg" alt="Logo" width={20} height={20} />
      </div>
      </div>
      
      
    </div>
  )
}

export default header