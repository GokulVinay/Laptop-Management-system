import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import useAuth from './useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading/Loading'

const RequireAuth = (props) => {
  const auth = useAuth()
  const [user, loading] = useAuthState(auth)
  const location = useLocation()

  if (loading) {
    return <Loading />
  }

  if (!user) {
    return <Navigate to="/login" state={{from: location}} replace/>
  }
  return (
    props.children
  )
}

export default RequireAuth