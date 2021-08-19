import React, {useState} from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'



export default function DropZone(props) {



    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' }
    }
    
    const handleChangeStatus = ({ meta }, status) => {
        // console.log(status, meta)
    }
    
    const handleSubmit = (files, allFiles) => {
        const acceptedFiles =[]
        allFiles.map(f => acceptedFiles.push(f.file))
        // Send to cloud
        // console.log(acceptedFiles)
        const url = `https://api.cloudinary.com/v1_1/xperiacloud/upload`
        
        const imgUrl = []

        acceptedFiles.forEach( async(acceptedFiles)=>{
        const formData = new FormData();
        formData.append('file', acceptedFiles)
        formData.append('upload_preset', 'Xperia')
        
        const response = await fetch(url, {
            method : 'post',
            body: formData
        })
        const data = await response.json()
        // push the image url 
        imgUrl.push(data.secure_url)
        
        // send the img url to the parents
       
        })
    }

  
    

    
    return (
        <div>
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                maxFiles={3}
                accept="image/*,audio/*,video/*"
                styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
                inputContent={(files, extra) => (extra.reject ? 'Image, audio and video files only' : 'Drag and Drop or click to add Images')}
            />
        </div>
    )
}
