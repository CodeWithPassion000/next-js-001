'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import axios from 'axios';





function SignUp() {

    const [user,setUser] =  useState({
        email:'',
        password:"",
        username:""
    })

    const signupHandler = async ()=>{

    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>Signup</h1>
        <hr />
        <label htmlFor='username'>Username</label>
        <input 
        className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
         id='username'
         type='text'
         value={user.username}
         placeholder='Username'
         onChange={(e)=>setUser({...user,username:e.target.value})}
        />
        <label htmlFor='email'>Email</label>
        <input 
        className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
         id='username'
         type='text'
         value={user.email}
         placeholder='Email'
         onChange={(e)=>setUser({...user,email:e.target.value})}
        />
        <label htmlFor='email'>Password</label>
        <input 
        className='p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
         id='username'
         type='password'
         value={user.password}
         placeholder='Password'
         onChange={(e)=>setUser({...user,password:e.target.value})}
        />
        <button
        onClick={signupHandler} 
        className='p-2 border border-gray-300 rounded-lg mn-4 focus:outline-none focus:border-gray-600'>Signup here</button>
        <Link href='/login'>Visit login</Link>
    </div>
  )
}

export default SignUp