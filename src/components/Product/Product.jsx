import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ data }) => {
  return (
    <div className='rounded-lg bg-zinc-200 overflow-hidden p-4 sm:p-7'>
      <img src={data.image} alt="Macbook" className='w-full aspect-video rounded-lg object-cover' />

      <h2 className='text-2xl font-bold mt-2'>{data.title}</h2>
      <p className='text-zinc-700 text-sm'>{data.short_description}</p>
      
      <div className='mt-4 flex flex-col gap-1'>
        <p className='text-lg font-normal'>Supplier - <span className='font-extrabold'>{data.suplier}</span></p>
        <p className='text-lg font-normal'>Price - <span className='font-extrabold'>${data.price}</span></p>
        <p className='text-lg font-normal'>Quantity - <span className='font-extrabold'>{data.quantity}</span></p>
      </div>

      <Link className='px-3 py-2 bg-indigo-500 text-white inline-block rounded-md mt-5' to={`/inventory/${data._id}`}>Manage</Link>
    </div>
  )
}

export default Product