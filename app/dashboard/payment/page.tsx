"use client";

import { useState } from "react";
import React from 'react'
import Image from 'next/image'


const Payment = () => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  return (
    <div className='bg-[#FFF8DB] '>
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

        <div>
          <button
            onClick={() => setShowCardForm(!showCardForm)}
            className={`border-[0.5px] rounded-md px-19 py-3 mt-3 flex justify-center items-center gap-3 transition-all
              ${
               showCardForm  ? "bg-[#f47732] border-[#f47732]" : "bg-white border-gray-300"
              }
            `}
            >
            <Image src="/Layer_1.svg" alt="" width={30} height={30} />

            <p
              className={`font-bold text-[14px] ${  showCardForm ? "text-white" : "text-gray-700" }`} >
              Credit Card
            </p>
         </button>
         {showCardForm && (
          <div className="mt-6 w-full max-w-[500px]">

            {/* Card Number */}
            <div className="">

              <div className="flex">
                <div className='relative mt-5 px-8'>
                  <label className='absolute -top-3.5 left-15  px-3 text-xl text-gray-600 bg-[#FFF8DB]'>
                    Card number
                  </label>
                  <input name='Card number' className="w-full rounded-xl border-gray-600 border px-3 pt-4 pb-4 placeholder: text-gray-600 p" placeholder='XXXXX XXXX XXXX'/>
                </div>

                <div className="flex justify-center items-center">
                  <span className="font-bold italic text-blue-600">
                   <Image src="/_x33_63.svg" alt="" width={30} height={30} />
                 </span>

                 <span className="text-orange-500 font-bold">
                  <Image src="/Group (2).svg" alt="" width={30} height={30} />
                 </span>
                </div>
              </div>
            </div>

            {/* Expiry + CVC */}
            <div className="flex mb-5">

              
              <div className='relative mt-5 px-8'>
                <label className='absolute -top-2 left-10  px-3 text-[15px] font-bold text-gray-600 bg-[#FFF8DB]'>
                  Expiry Date
                </label>
                <input name='Expiry Date' className="w-full rounded-xl border-gray-600 border px-3 pt-4 pb-4 placeholder: text-gray-600" placeholder='MM/YY'/>
              </div>
            

              <div className='relative mt-5 px-8'>
                <label className='absolute -top-3.5 left-15  px-3 text-xl text-gray-600 bg-[#FFF8DB]'>
                  CVC
                </label>
                <input name='CVC' className="w-full rounded-xl border-gray-600 border px-3 pt-4 pb-4 placeholder: text-gray-600 p" placeholder='CVC'/>
              </div>

            </div>

            {/* Save Card */}
            <label className="flex items-center ml-8 gap-3 text-gray-600 text-sm">
              <input type="checkbox" className="w-5 h-5" />
               Save as my default card.
            </label>

            {/* Terms */}
            <p className="text-gray-800 text-[10px] mt-6 mr-8 ml-8">
              By selecting the "Payment Button" below, you confirm that you
              have read and accept Terms & Conditions.
            </p>

            {/* Payment Button */}
            <button
            onClick={() => setPaymentSuccessful(true)}
            className="w-70 ml-12 bg-[#f47732] text-white font-bold py-4 rounded-2xl mt-4" >
              Make Payment
            </button>


            {paymentSuccessful && (
  <div className="fixed inset-0 bg-black/0 flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl w-[320px] py-10 px-6 text-center shadow-xl">

      {/* Checkmark */}
      <div className="w-28 h-28 bg-white rounded-full shadow-md mx-auto flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#f47732] flex items-center justify-center">
          <span className="text-white text-4xl font-bold">
            ✓
          </span>
        </div>
      </div>

      {/* Successful */}
      <h2 className="text-3xl font-bold text-gray-800 mt-6">
        Successful
      </h2>

      {/* Go Back */}
      <button
        onClick={() => setPaymentSuccessful(false)}
        className="w-full bg-[#f47732] text-white font-bold py-3 rounded-xl mt-6"
      >
        Go Back
      </button>

    </div>

  </div>
)}
            

      </div>
     )}
    </div>
        
    </div>
    </div>
  )
}

export default Payment