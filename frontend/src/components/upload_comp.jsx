import { useEffect,useState } from "react"
import axios from "axios"


export default function UploadComp(){
    const [file,setFile] = useState();
    const [image,setImage] = useState();

    const handleUpload = (e)=>{
        const formData = new FormData();  
        formData.append('file',file);
        axios.post('http://localhost:3000/upload' ,formData)
        .then((res)=>{
            console.log(res.data[0].image);
            setImage(res.data[0].image)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/getImage')
    //     .then((res)=>{
            
    //         console.log(image);
    //     })
    //     .catch((err)=>{console.log(err)})
    // },[])

    return (
        <div>
            <h1>Upload</h1>
            <br />
            <input type="file" onChange={(e)=>{
                setFile(e.target.files[0]);
            }} /> 
            <br /><br />
            <button onClick={handleUpload}>Upload</button>
            <br />
            <img src={http://localhost:3000/Images/+image} alt="" />
        </div>
    )
}