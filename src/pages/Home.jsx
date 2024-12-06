import React from 'react'
import { Helmet } from 'react-helmet-async'
import Title from '../components/Title/Title'
import Banner from '../sections/Banner/Banner'
import Features from '../sections/Feattures/Features'
import Notify from '../sections/Notify/Notify'
import Products from '../sections/Products/Products'

const Home = () => {
  return (
    <div>
      <Title title='Home' />
      <Banner />
      <Features />
      <Products />
      <Notify />
    </div>
  )
}

export default Home