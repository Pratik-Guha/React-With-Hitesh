import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>response.json()).then((data)=>{
    //         setData(data)
    //     })
    // },[])
    const data=useLoaderData()
  return (
    <div className=' bg-white text-3xl p-5 text-center'>Github Followers : {data.followers}
    
    <img src="https://cdn.pixabay.com/photo/2023/04/28/19/12/stream-7957258_1280.jpg" className='w-full h-1/2' alt="" />
    </div>
  )
}

export default Github

export const githubloader=async ()=>{
    const response=await fetch('https://api.github.com/users/PratikGuha');
    return response.json();
}