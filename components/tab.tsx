import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { MdCreditCard } from "react-icons/md";
import Link from "next/link";

const Tab
 = () => {
  return (
    <div className="flex justify-around items-center bg-[#FADB7E] p-4 fixed bottom-0 w-full gap-5">
      <Link href="/dashboard/" className="text-black flex flex-col items-center ">
        <AiOutlineHome className='text-2xl' />
        <span className='text-[13px]'>Home</span>
      </Link>

      <Link href="/dashboard/balance" className="text-black flex flex-col items-center">
        <IoWalletOutline className='text-2xl' />
        <span className='text-[13px]'>Balance Due</span>
      </Link>

      <Link href="bookvisitor" className="text-black flex flex-col items-center">
        <FaPeopleCarry className='text-2xl' />
        <span className='text-[13px]'>My Visitor</span>
      </Link>

      <Link href="/dashboard/payment" className="text-black flex flex-col items-center">
        <MdCreditCard className='text-2xl' />
        <span className='text-[13px]'>Payment</span>  
      </Link>
    </div>
  )
}

export default Tab
