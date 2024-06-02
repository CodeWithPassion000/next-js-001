'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import router from 'next/router';





function Login() {

    const router = useRouter()
    const [user,setUser] =  useState({
        email:'',
        password:"",
        
    });
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
      if(user.email.length > 0  && user.password.length > 0){
        setButtonDisabled(false)
      }else{
        setButtonDisabled(true)
      }

    },[user])

   
    const loginHandler = async ()=>{
      setLoading(true)

      try{

        setLoading(true);
        const response = await axios.post('api/users/login',user);
        console.log("Login succes",response);
        toast.success('Login Succes');
        router.push('/profile')

      }catch(error:any){
        console.log('Login failed',error.message);
        toast.error(error.message)
      } finally{
        setLoading(false)
      }


    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
<h1>{loading ? "Process":"Login"}</h1>        <hr />
        
        <label htmlFor='email'>Email</label>
        <input 
        className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
         id='username'
         type='text'
         value={user.email}
         placeholder='Email'
         onChange={(e)=>setUser({...user,email:e.target.value})}
        />
        <label htmlFor='email'>Password</label>
        <input 
        className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
         id='username'
         type='password'
         value={user.password}
         placeholder='Password'
         onChange={(e)=>setUser({...user,password:e.target.value})}
        />
        <button
        onClick={loginHandler} 
        className='p-2 border border-gray-300 rounded-lg mn-4 focus:outline-none focus:border-gray-600 '>{buttonDisabled ? 'No Login':'Login here'}</button>
        <Link href='/signup'>Visit Signup</Link>
    </div>
  )
}

export default Login