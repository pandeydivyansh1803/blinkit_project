import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function HomeComp() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>{
        navigate('/login')
      }}>Existing user ?? login</button>
      <br></br>
      <br></br>
      <button onClick={()=>{
        navigate('/signup')
      }}>New user ?? singup</button>
    </div>
  )
}
