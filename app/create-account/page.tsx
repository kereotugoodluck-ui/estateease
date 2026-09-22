"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  getRedirectResult,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";  

const useRedirectFlow = process.env.NODE_ENV === "production";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const create = () => {
  const [agreed, setAgreed] = useState(false);
  const [loading, isLoading] = useState(false)
  const [error, setError] = useState<string | null> (null);
  const router = useRouter();

  useEffect(() => {
    if(!useRedirectFlow) return;

    let mounted = true

    async function handleRedirectResult(){
      try {
        const result = await getRedirectResult(auth);
        if(!mounted) return;
        if(result?.user) {
          router.push("/dashboard")
        }

      } catch (err: unknown) {
        if(!mounted) return;

        const message = err instanceof Error ? err.message : "google sign in failed"
        setError(message)
        isLoading(false)
      }
          
    }

    handleRedirectResult();
    return () => {
      mounted = false;
    };

  }, [router])


  async function handleGoogleSignIn() {
    setError(null);
    isLoading(true);

    try {
      if (useRedirectFlow) {
        await signInWithRedirect(auth, googleProvider);

      } else {
        const result = await signInWithPopup(auth, googleProvider);
        if (result?.user) {
          router.push("/dashboard");
        }
        isLoading(false);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "unable to connect with google";
      setError(message);
      isLoading(false);
    }
  }

  return (
    <>
    <div>
      <div className=' bg-[#EE7421] h-40 px-6 pt-10'>
        <h1 className='text-white text-3xl pb-5'>EstateEaze</h1>
        <p className='text-black text-xl'>Already have an account? <a href="/login" className='text-white hover:underline pl-3'>Login</a></p>
      </div>

      <div>
        <p className='text-xl text-gray-800 font-bold px-8 pt-7 pb-8'>Create your account</p>

        <button className='flex justify-center items-center px-20 h-16 mx-6 border rounded-xl border-gray-400'
         onClick={handleGoogleSignIn}>
          <Image src="/google.png" alt="create account" width={15} height={15} className='' />
          <p className='text-gray-500 text-lg font-bold  ml-2'>Login with Google</p>
        </button>

        <div className='flex items-center gap-13 px-8 mt-8'>
          <div className='border-t border-gray-900 flex-grow'></div>
          <p className='text-gray-900 font-bold text-2xl'>or</p>
          <div className='border-t border-gray-900 flex-grow'></div>
        </div>

        <div className=' space-y-8 mt-8 px-8'>
          <div className='relative'>
            <label className='absolute -top-3.5 left-6 px-3 text-xl text-gray-400 font-bold bg-white'>Full Name</label>
            <input name='full name' className='w-full rounded-xl border-gray-400 border px-3 pt-6 pb-2'/>
          </div>

          <div className='relative'>
            <label className='absolute -top-3.5 left-6 px-3 text-xl text-gray-400 font-bold bg-white'>Email</label>
            <input name='email' className='w-full rounded-xl border-gray-400 border px-3 pt-6 pb-2'/>
          </div>

          <div className='relative'>
            <label className='absolute -top-3.5 left-6 px-3 text-xl text-gray-400 font-bold bg-white'>Password</label>
            <input name='password' className='w-full rounded-xl border-gray-400 border px-3 pt-6 pb-2 placeholder: text-gray-500 px-8 ' 
            placeholder='6+ characters'/>
          </div>

          <div className='relative'>
            <label className='absolute -top-3.5 left-6 px-3 text-xl text-gray-400 font-bold bg-white'>Password Confirmation</label>
            <input name='password confirmation' className='w-full rounded-xl border-gray-500 border px-3 pt-6 pb-2 placeholder: text-gray-500 px-8 ' 
            placeholder='6+ characters'/>
          </div>
        </div>

        <div className='flex px-8 mt-5'>
          <input type="checkbox" className='w-6 h-6' />
          <p className='text-gray-800 pl-3'>I agree to all Terms, Policy and Fees</p>
        </div>

          <button  className='bg-[#EE7421] text-white py-4 w-82 rounded-xl hover:bg-[#d46b1c] mx-8 mt-5 mb-30' >
            Sign Up
          </button>
      </div>


    </div>

      

    </>
  )
}



export default create