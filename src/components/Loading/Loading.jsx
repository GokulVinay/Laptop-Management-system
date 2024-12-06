import React from 'react'
import Container from '../Container/Container'
import { BiLoaderAlt } from 'react-icons/bi'

const Loading = () => {
  return (
    <Container className='min-h-[75vh] flex items-center justify-center'>
      <div className='flex gap-2 items-center'>
        <h1 className='text-2xl font-bold'>Loading</h1>
        <BiLoaderAlt className='text-2xl animate-spin' />
      </div>
    </Container>
  )
}

export default Loading