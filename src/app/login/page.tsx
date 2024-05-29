'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import axios from 'axios';





function Login() {

    const [user,setUser] =  useState({
        email:'',
        password:"",
        
    })

    const loginHandler = async ()=>{

    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>Login</h1>
        <hr />
        
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
        className='p-2 border border-gray-300 rounded-lg mn-4 focus:outline-none focus:border-gray-600 '>Login here</button>
        <Link href='/signup'>Visit Signup</Link>
    </div>
  )
}

export default Login