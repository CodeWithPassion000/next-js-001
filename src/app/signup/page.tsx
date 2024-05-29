'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';





function SignUp() {
  const router = useRouter()

    const [user,setUser] =  useState({
        email:'',
        password:"",
        username:""
    })
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
      if(user.email.length > 0  && user.username.length > 0 && user.password.length > 0){
        setButtonDisabled(false)
      }else{
        setButtonDisabled(true)
      }
    },[user])

    const signupHandler = async ()=>{

      try{

        setLoading(true);
       let response =  await axios.post('/api/users/signup',user);
       console.log("Signup Success",response.data)
       router.push('/login')

      }catch(error:any){
        console.log('Signup filed',error)
        toast.error(error.message)

      }finally{
        setLoading(false)
      }

    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>{loading ? "Process":"Signup"}</h1>
        <hr />
        <label htmlFor='username'>Username</label>
        <input 
        className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
         id='username'
         type='text'
         value={user.username}
         placeholder='Username'
         onChange={(e)=>setUser({...user,username:e.target.value})}
        />
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
        onClick={signupHandler} 
        className='p-2 border border-gray-300 rounded-lg mn-4 focus:outline-none focus:border-gray-600 '>{buttonDisabled ? "No Signup":"Signup here"}</button>
        <Link href='/login'>Visit login</Link>
    </div>
  )
}

export default SignUp