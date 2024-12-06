import React from 'react'
import toast from 'react-hot-toast'
import Container from '../../components/Container/Container'

const Notify = () => {
  const handleSubscription = e => {
    e.preventDefault()
    toast.success('Subscription complete')
    e.target.reset()
  }
  return (
    <div className='bg-zinc-800 text-zinc-200'>
      <Container className='py-20 text-center'>
        <h1 className='text-3xl font-bold mb-2'>Join our mailing list</h1>
        <p className='text-zinc-400'>Get notified when items gets restocked or out of stock to keep your store up to date</p>

        <div className='max-w-lg mx-auto mt-10'>
          <form onSubmit={handleSubscription}>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0'>
              <input type="email" name="email" placeholder='Email' className='border-none py-3 bg-zinc-900 rounded-md w-full sm:col-span-2 sm:rounded-none sm:rounded-l-md' required/>
              <div>
                <button className='px-4 py-3 sm:w-full bg-indigo-500 items-center inline-block justify-center rounded-md sm:rounded-none sm:rounded-r-md'>Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Notify