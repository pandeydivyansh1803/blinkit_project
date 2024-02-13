import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function LoginComp() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  return (
    <div>
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
        axios.post("http://localhost:3000/login" ,{name,email,password}).then((res)=>{
          if(res.success===true){
              localStorage.setItem("token",res.token);
              navigate('/upload')
          }else{
            navigate('/login')
          }
        })
      }}>Login</button>
    </div>
  )
}
