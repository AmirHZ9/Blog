import React from 'react'
import spinner from "../../Assets/spinner.gif"
export default function Spinner() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <img src={spinner} alt=""  className='w-20 h-20 '/>
        <h3 className='text-2xl font-bold mt-6'>Loading . . .</h3>
    </div>
  )
}
