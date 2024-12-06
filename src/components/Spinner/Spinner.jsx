import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center py-10'>
      <div className='flex gap-2 items-center'>
        <h1 className='text-2xl font-bold'>Loading</h1>
        <BiLoaderAlt className='text-2xl animate-spin' />
      </div>
    </div>
  )
}

export default Spinner