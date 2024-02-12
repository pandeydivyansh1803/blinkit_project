import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignupComp() {
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  return (
    <div>
      <input placeholder='name' onChange={(e)=>{
        setName(e.target.value)
      }}></input>
      <br></br>
      <br></br>
      <input placeholder='email' onChange={(e)=>{
        setEmail(e.target.value)
      }}></input>
      <br></br>
      <br></br>
      <input placeholder='password' onChange={(e)=>{
        setPassword(e.target.value)
      }}></input>
      <br></br>
      <br></br>
      <button onClick={()=>{
        axios.post("http://localhost:5173/signup" ,{name,email,password}).then((res)=>{
          navigate('/login')
        })
      }}>Submit</button>
    </div>
  )
}
