import React from 'react'
import HeadTitleImg from '../../assets/logo.png'
import TimeAndData from '../TimeAndData/TimeAndData'

export default function Header() {
  return (
    <div className='flex justify-center items-center mb-2 p-4 text-center'>

         <div className='space-y-2'>

          <img src={HeadTitleImg} alt="" />
          <p className='text-[#706F6F] '> Journalism Without Fear or Favour</p>
         <TimeAndData></TimeAndData>
         </div>
      
    </div>
  )
}
