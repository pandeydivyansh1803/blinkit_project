import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UploadComp() {
  const [file,setFile] = useState()
  const handleUpload = (e)=>{
    console.log(file)
  }
  return (
    <div>
        <input type="file" onChange={e => setFile(e.target.files[0])}></input>
        <br></br>
        <br></br>
        <button onClick={handleUpload}>Upload files</button>
    </div>
  )
}
