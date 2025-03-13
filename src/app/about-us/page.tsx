import React from 'react'
import { AboutUs, LegalVision, Values } from '@/components'

const page = () => {
  return (
    <div className='bg-white text-black'>
        <AboutUs />
        <LegalVision />
        <Values />
    </div>
  )
}

export default page