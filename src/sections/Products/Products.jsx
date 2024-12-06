import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config/config'
import Container from '../../components/Container/Container'
import Product from '../../components/Product/Product'
import Spinner from '../../components/Spinner/Spinner'

const Products = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/inventory?limit=6`)
        setItems(data.items)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
      .catch(console.error)
  }, [])

  return (
    <Container className='py-20'>
      <h1 className='text-4xl font-bold mb-10 text-center'>Inventory</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {items.map(item => {
          return <Product key={item._id} data={item} />
        })}
      </div>

      {loading && <Spinner />}

      <div className='mt-10 text-center'>
        <Link className='text-lg uppercase font-bold bg-green-500 px-4 py-3 text-white rounded-md' to="/inventory">Manage Inventory</Link>
      </div>
    </Container>
  )
}

export default Products