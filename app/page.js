'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import dividerDesktop from '@public/images/pattern-divider-desktop.svg'
import dividerMobile from '@public/images/pattern-divider-mobile.svg'
import dice from '@public/images/icon-dice.svg'

const Home = () => {
  const API_LINK = "https://api.adviceslip.com/advice"

  const getAdvice = async () => {
    const response = await fetch(API_LINK)
    const advice = await response.json()
    setAdvice(advice.slip)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  const [advice, setAdvice] = useState('')

  return (
    <div className='bg-dark-grey flex align-middle justify-center h-screen'>
      <main className='relative bg-card p-10 rounded-xl text-center m-auto max-w-sm'>
        <h1 className='tracking-[.3rem] uppercase text-title font-semibold text-sm'>
          Advice #{advice.id}
        </h1>
        <p className='text-quote font-semibold text-2xl mt-4 mb-9'>&quot;{advice.advice}&quot;</p>
        <div className="flex justify-center mb-8">
          <Image className='hidden lg:block' src={dividerDesktop} alt="divider" />
          <Image className='lg:hidden' src={dividerMobile} alt="divider" />
        </div>
        <button onClick={getAdvice} className='hover:drop-shadow-green hover:rotate-[135deg] hover:scale-110 transition-transform hover:ease-in-out duration-300 cursor-pointer absolute left-1/2 translate-y-1/4 -translate-x-1/2 rounded-full bg-[#52ffa8] p-4'>
          <Image src={dice} alt='dice' />
        </button>
      </main>
    </div>
  )
}

export default Home
