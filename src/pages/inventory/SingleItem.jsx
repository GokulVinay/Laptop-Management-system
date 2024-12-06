import React, { useState, useEffect } from 'react'
import Container from '../../components/Container/Container'
import { useForm } from 'react-hook-form' 
import axios from 'axios'
import { API_URL } from '../../config/config'
import { Link, useParams } from 'react-router-dom'
import Markdown from 'marked-react'
import toast from 'react-hot-toast'
import Title from '../../components/Title/Title'
import { BiLeftArrow } from 'react-icons/bi'

const SingleItem = () => {
  const [item, setItem] = useState({data: null, loaded: false})
  const { register, handleSubmit, reset, formState: { errors }} = useForm()
  const params = useParams()
  const itemId = params.id
  
  useEffect(() => {
    const fetchItem = async () => {
      if (item.loaded) return
      
      const { data } = await axios.get(`${API_URL}/inventory/${itemId}`)
      if (data.error) {
        setItem({ loaded: true, data: null})
      } else {
        setItem({ loaded: true, data: data})
      }
    }

    fetchItem()
      .catch(console.error)
  }, [])

  const updateStock = async (data) => {
    const quantity = data.quantity

    if (!quantity || quantity < 1) {
      return toast.error('Quantity must 1 or more.')
    }

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      }
      const { data: updatedData } = await axios.put(`${API_URL}/inventory/${item.data._id}/restock`, data, config)

      if (updatedData.error) {
        return toast.error(updatedData.error)
      }

      setItem({...item, data: updatedData})
      reset({ quantity: ''})
      toast.success("Item's stock has been updated.")
    } catch (err) {
      toast.error('Something went wrong while updating quantity')
    }
  }

  const deliverItem = async () => {
    if (item.data.quantity <= 0) {
      return toast.error("Item is out of stock, Can't deliver")
    }

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      }
      const { data: updatedData } = await axios.put(`${API_URL}/inventory/${item.data._id}/delivered`, {}, config)

      if (updatedData.error) {
        return toast.error(updatedData.error)
      }

      toast.success("Item delivered")
      setItem({...item, data: updatedData})
    } catch (err) {
      toast.error('Something went wrong while updating quantity')
    }
  }
  
  return (
    <Container className='py-20'>
      {!item.loaded && (
        <>
          <Title title='Please wait...' />
          <h1 className='text-3xl text-center font-bold'>Please wait..</h1>
        </>
      )}

      {(item.loaded && !item.data) && (
        <div className='text-center'>
          <Title title='Item Not Found' />
          <h1 className='text-3xl text-red-500 text-center font-bold'>Item not found</h1>
          <Link to="/inventory" className='px-5 py-3 bg-indigo-500 rounded-md text-white inline-block mt-5'>Go Back</Link>
        </div>
      )}

      {item.data && (
        <>
          <Title title={item.data.title } />
          <Link to='/inventory' className='flex gap-2 items-center mb-5 px-3 py-2rounded-md text-indigo-500'>
            <BiLeftArrow className='text-2xl' />
            Manage Inventories
          </Link>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <img src={item.data.image} alt="Macbook" className='rounded-lg'/>
            </div>

            <div>
              <h1 className='text-3xl font-bold'>{item.data.title}</h1>
              <p>{item.data.short_description}</p>

              <div className='mt-4'>
                <p className='font-bold text-xl'>Price - <span className='font-normal text-blue-500'>${item.data.price}</span></p>
                <p className='font-bold text-xl'>Brand - <span className='font-normal text-blue-500'>{item.data.brand}</span></p>
                <p className='font-bold text-xl'>Supplier - <span className='font-normal text-blue-500'>{item.data.suplier}</span></p>
                <p className='font-bold text-xl'>Stock - <span className='font-normal text-blue-500'>{item.data.quantity}</span></p>
                <p className='font-bold text-xl'>Sold - <span className='font-normal text-blue-500'>{item.data.sold}</span></p>
              </div>

              <div className='mt-4'>
                <button onClick={deliverItem} className='px-5 py-3 font-semibold tracking-wide bg-yellow-500 rounded-md text-white'>Delivered</button>
              </div>

              <div className='mt-10'>
                <h1 className='text-xl font-bold mb-2'>Restock</h1>
                <form onSubmit={handleSubmit(updateStock)}>
                  <div className='flex'>
                    <input type="number" placeholder='Quantity' className='h-full' {...register('quantity', { min: 1, required: true})} required/>
                    <button className='px-5 font-semibold tracking-wide bg-green-500 text-white inline-block'>Update</button>
                  </div>
                  {errors.quantity && <p className='text-sm text-red-400'>Please put a valid quantity</p>}
                </form>
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <h2 className='text-3xl font-bold mb-2'>Description</h2>

            <div className='prose max-w-full'>
              <Markdown>
                {item.data.description}
              </Markdown>
            </div>
          </div>
        </>
      )}
      
    </Container>
  )
}

export default SingleItem