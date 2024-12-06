import React from 'react'
import Container from '../../components/Container/Container'

const Features = () => {
  return (
    <div className='bg-zinc-800 text-zinc-200'>
      <Container className='py-10 sm:py-20'>
        <h1 className='text-3xl font-bold mb-10 text-center'>Why choose us?</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          <div className='border-red-400 p-5 bg-zinc-700 rounded-md'>
            <h2 className='text-xl font-bold mb-2'>
              World Wide Transport
            </h2>

            <p className='text-sm text-zinc-400 mb-5'>We deliver our products on any country in this world. So you don't have to look around</p>

            <button className='px-5 py-3 bg-zinc-800 rounded-md'>More Info</button>
          </div>

          <div className='border-red-400 p-5 bg-zinc-700 rounded-md'>
            <h2 className='text-xl font-bold mb-2'>
              Fast Delivery
            </h2>

            <p className='text-sm text-zinc-400 mb-5'>You will get your desired product as soon as possible. You time is also valuable to us</p>

            <button className='px-5 py-3 bg-zinc-800 rounded-md'>More Info</button>
          </div>

          <div className='border-red-400 p-5 bg-zinc-700 rounded-md sm:last:col-span-2 md:last:col-span-1'>
            <h2 className='text-xl font-bold mb-2'>
              Secure Packaging
            </h2>

            <p className='text-sm text-zinc-400 mb-5'>Our packaging is so secure that your item will not get a single scratch before it gets on your hand</p>

            <button className='px-5 py-3 bg-zinc-800 rounded-md'>More Info</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Features