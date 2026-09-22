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

const login = () => {
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
    <div className='bg-[#FFF8DB]'>

      <div className='flex justify-center items-center'>
        <img src="/girl going home icon.svg" alt="logo" width={250} height={250} className='mt-10' />
      </div>

      <div className='flex justify-start items-start w-70 flex-col px-8 mt-7'>
        <h1 className='text-black text-xl font-bold text-center'>Welcome Back!</h1>
        <p className='text-gray-500 text-[17px] pb-5 font-semi-bold text-center'>Please enter your details</p>
      </div>

      <div>
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

          <div className='relative mt-5 px-8'>
            <label className='absolute -top-3.5 left-15  px-3 text-xl text-gray-700 font-bold bg-[#FFF8DB]'>
              Email
            </label>
            <input name='email' className='w-full rounded-xl border-gray-800 border pt-6 pb-2'/>
          </div>

          <div className='relative mt-5 px-8 pb-5'>
            <label className='absolute -top-3.5 left-15  px-3 text-xl text-gray-700 font-bold bg-[#FFF8DB]'>Password</label>
            <input name='password' className='w-full rounded-xl border-gray-800 border px-3 pt-6 pb-2 placeholder: text-gray-600 pl-6' 
            placeholder='6+ characters'/>
          </div>

          <Link href="" className='text-gray-500  font-semi-bold pl-15'>Forgot Password?</Link>

          <button className='bg-[#EE7421] text-white py-2 w-82 rounded-xl hover:bg-[#d46b1c] mx-8 mt-5 mb-5'>
            Login
          </button>

          <p className='text-gray-500 text-lg font-semi-bold px-8 mb-20'>
            Don't have an account? <Link href="/create-account" className='text-[#EE7421] hover:underline'>Sign Up</Link>
          </p>
      </div>
    </div>

    
  )
}

export default login
