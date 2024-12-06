import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { BiTrashAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config/config'
import axios from 'axios'
import toast from 'react-hot-toast'
import Spinner from '../../components/Spinner/Spinner'
import Title from '../../components/Title/Title'

const Inventory = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/inventory`)
        setItems(data.items)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
      .catch(console.error)
  }, [])

  const handleDelete = async (itemId) => {
    const confirmed = window.confirm("Are you sure?")

    if(confirmed) {
      try {
        const config = {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
        const response = await axios.delete(`${API_URL}/inventory/${itemId}`, config)
        if (response.data.error) {
          return toast.error(response.data.error)
        }
        toast.success('Item deleted')
        setItems(items.filter(item => item._id !== itemId))
      } catch (err) {
        return toast.error('Something went wrong. Please try again.')
      }
    } 
  }

  return (
    <div>
      <Title title='Manage Inventory' />
      <Container className='py-20'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-center mb-10'>Manage Inventory</h1>
          <Link to='/inventory/add' className='px-5 py-3 bg-indigo-500 text-white rounded-md'>Add New Item</Link>
        </div>

        <table className='table-auto w-full text-left rounded-lg overflow-hidden'>
          <thead className='bg-black text-white'>
            <tr>
              <th className='px-5 py-3'>SL.</th>
              <th className='px-5 py-3'>Name</th>
              <th className='px-5 py-3 hidden md:table-cell'>Brand</th>
              <th className='px-5 py-3 hidden md:table-cell'>Stock</th>
              <th className='px-5 py-3'>Manage</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => {
              return (<tr key={item._id} className='odd:bg-zinc-200'>
                <td className='px-5 py-2'>{index + 1}</td>
                <td className='px-5 py-2'>{item.title}</td>
                <td className='px-5 py-2 hidden md:table-cell'>{item.brand}</td>
                <td className='px-5 py-2 hidden md:table-cell'>{item.quantity ? 'In Stock' : 'Out Of Stock'}</td>
                <td className='flex flex-wrap gap-2 items-center pl-5 py-2'>
                  <div onClick={() => handleDelete(item._id)} className='p-2 bg-red-400 text-white text-xl rounded-full cursor-pointer'>
                    <BiTrashAlt />
                  </div>
                  <Link className='p-2 bg-indigo-400 hover:bg-indigo-500 rounded-md text-white' to={`/inventory/${item._id}`}>Manage</Link>
                </td> 
              </tr>)
            })}
          </tbody>
        </table>

        {loading && <Spinner />}
      </Container>
    </div>
  )
}

export default Inventory