import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'

const Footer = () => {
  return (
    <div>
      <Container className='py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        <div className='col-span-1 sm:col-span-2'>
          <h1 className='text-2xl font-bold uppercase'>Laptop Carnival</h1>
          <p className='text-zinc-500'>Our warehouse has the largest collection of laptops from all the brands in existance. Check it out.</p>
        </div>

        <div>
          <h1 className='text-xl font-bold'>Usefull Links</h1>
          <ul>
            <li>
              <Link className='text-indigo-500' to='/login'>Login</Link>
            </li>
            <li>
              <Link className='text-indigo-500' to='/register'>Register</Link>
            </li>
            <li>
              <Link className='text-indigo-500' to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className='text-xl font-bold'>Social Links</h1>
          <ul>
            <li>
              <a href="#" className='text-indigo-500'>Facebook</a>
            </li>
            <li>
              <a href="#" className='text-indigo-500'>Twitter</a>
            </li>
            <li>
              <a href="#" className='text-indigo-500'>Instagram</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Footer