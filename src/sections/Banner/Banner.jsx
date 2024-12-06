import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'

const Banner = () => {
  return (
    <div>
      <Container className='py-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col justify-center order-2 md:order-1'>
          <h1 className='text-4xl font-bold'>Best Laptops Around the globe</h1>
          <p className='font-light mt-2'>Our warehouse has the largest collection of laptops from all the brands in existance. Check it out.</p>

          <div className='mt-3'>
            <Link to='/inventory' className='px-7 py-3 bg-indigo-500 text-white inline-block rounded-md'>Manage Inventory</Link>
          </div>
        </div>

        <div className='order-1 md:order-2 flex justify-center'>
          <img className='w-full sm:w-[70%] md:w-full' src="/images/banner/laptop.png" alt="Laptotp" />
        </div>
      </Container>
    </div>
  )
}

export default Banner