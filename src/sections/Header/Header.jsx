import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import useAuth from '../../firebase/useAuth'
import Container from '../../components/Container/Container'
import CustomLink from '../../components/CustomLink/CustomLink'
import { BiMenu } from 'react-icons/bi'

const Header = () => {
  const auth = useAuth()
  const [user, loading, error] = useAuthState(auth);
  const [open, setOpen] = useState(false)
  
  return (
    <header>
      <Container className='h-16 flex items-center relative justify-between'>
        <div className='text-2xl font-bold uppercase'>
          <Link to='/'>
            Laptop <span className='font-light'>Carnival</span>
          </Link>
        </div>

        <div className={`z-50 absolute sm:static top-16 left-0 w-full md:w-auto px-4 py-5 sm:p-0 bg-black sm:bg-transparent text-white sm:text-black flex flex-col sm:flex-row sm:items-center sm:ml-auto gap-2 md:gap-4 ${open ? 'flex' : 'hidden sm:flex'}`}>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/blogs'>Blogs</CustomLink>
          {user ? (
            <>
              <CustomLink to='/inventory'>Manage Inventory</CustomLink>
              <CustomLink to='/inventory/my'>My Items</CustomLink>
              <CustomLink to='/inventory/add'>Add Item</CustomLink>
              
              <div className='flex gap-2 items-center'>
                <span className='font-bold hidden md:inline-block'>{user.displayName}</span>
                <button className='cursor-pointer px-3 py-2 rounded-md bg-red-500 text-white' onClick={() => signOut(auth)}>Logout</button>
              </div>
            </>
            ) : (
            <CustomLink to='/login' className='px-3 py-2 rounded-md bg-indigo-500 text-white'>Login</CustomLink>
          )}
        </div>

        <div className='ml-auto text-2xl sm:hidden' onClick={() => setOpen(!open)}>
          <BiMenu />
        </div>
      </Container>
    </header>
  )
}

export default Header