import React from 'react'
import { Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout'
import RequireAuth from './firebase/RequireAuth';

import Home from './pages/Home';
import Inventory from './pages/inventory/Inventory';
import SingleItem from './pages/inventory/SingleItem';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import MyItems from './pages/inventory/MyItems';
import AddItem from './pages/inventory/AddItem';
import { Toaster } from 'react-hot-toast'
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />

        <Route path="/inventory" element={<RequireAuth><Inventory /></RequireAuth>} />
        <Route path="/inventory/my" element={<RequireAuth><MyItems /></RequireAuth>} />
        <Route path="/inventory/add" element={<RequireAuth><AddItem /></RequireAuth>} />

        <Route path="/inventory/:id" element={<RequireAuth><SingleItem /></RequireAuth>} />
      </Routes>
      <Toaster />
    </Layout>
  )
}

export default App
