import React, { useEffect, useState } from 'react'
import Container from '../components/Container/Container'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import useAuth from '../firebase/useAuth'
import axios from 'axios'
import { API_URL } from '../config/config'
import toast from 'react-hot-toast'
import Title from '../components/Title/Title'
import Spinner from '../components/Spinner/Spinner'

const Login = () => {
  const auth = useAuth()
  const [signInWithGoogle, google_user, google_loading, google_error] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, email_pass_user, email_pass_loading, email_pass_error] = useSignInWithEmailAndPassword(auth);
  const [accessToken, setAccessToken] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    await signInWithEmailAndPassword(data.email, data.password)
  }

  const handleGoogleLogin = async () => {
    await signInWithGoogle() 
  }

  useEffect(() => {
    if (!accessToken && (google_user || email_pass_user)) {
      try {
        const { user } = google_user || email_pass_user
        axios.post(`${API_URL}/login`, { email: user.email, username: user.displayName})
          .then(response => {
            const data  = response.data
            
            if (data.error) {
              return toast.error(data.error)
            }

            localStorage.setItem('accessToken', data.accessToken)
            setAccessToken(data.accessToken)
          })
      } catch (err) {
        toast.error('Something went wrong while generating access token')
      }
    }
    if (accessToken) {
      if (google_user || email_pass_user) {
        navigate(from)
      }
    }
  }, [google_user, email_pass_user, accessToken])

  return (
    <div>
      <Title title='Login' />
      <Container className='py-20'>
        <h1 className='text-3xl font-bold text-center mb-5'>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] mx-auto'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <label>Email</label>
              <input type='email' {...register("email", { required: true })} required/>
              {errors.email && <span className='text-xs text-red-400'>This field is required</span>}
            </div>

            <div className='flex flex-col gap-2'>
              <label>Password</label>
              <input type='password' {...register("password", { required: true })} required/>
              {errors.password && <span className='text-xs text-red-400'>This field is required</span>}
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            <input className='py-3 bg-indigo-500 text-white rounded-md cursor-pointer' type="submit" value={email_pass_loading ? 'Please Wait...' : 'Login'} />
            <button onClick={handleGoogleLogin} type='button' className='py-3 bg-black col-span-2 flex items-center gap-2 justify-center rounded-md text-white'><FcGoogle className='text-2xl' /> 
              {google_loading ? 'Please Wait...' : 'Google'}
            </button>
          </div>

          <p className='text-red-500 mt-2'>{google_error ? google_error.message : email_pass_error ? email_pass_error.message : null}</p>

          <Link to='/register' className='block text-blue-500 mt-5'>Don't have an account?</Link>
          <Link to='/reset' className='block text-blue-500'>Forgot Password?</Link>
        </form>
      </Container>
    </div>
  )
}

export default Login