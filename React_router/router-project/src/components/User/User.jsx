import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

   const {userid}= useParams()
  return (
    <div className=' text-center text-white p-4 text-3xl'>User : {userid}</div>
  )
}

export default User