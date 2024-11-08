'use client';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Form from '../components/Form';

const createPost=()=> {
    const {data:session}=useSession();
    const router = useRouter();
    
    useEffect(() => {
        if(!session){
            router.push('./');
        }
        
    },[])
  return (
    <div className='flex justify-center'>
        <div className='p-6 mt-8 lg:w-[35%] md:w-[25%]'>
            <h2 className='text-[30px] font-extrabold text-blue-500'>CREATE POST</h2>
            <p>Create Post and Discover new Friends and Players</p>
            <Form/>
        </div>
    </div>
  )
}

export default createPost
