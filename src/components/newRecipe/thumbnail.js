import React, { useState } from 'react'
import thumbnail from '../../public/images/placeholders/thumbnail.jpeg'
export default function MultiFileUploadComponent () {

    const filesArray = [];
    const filesCollection = [];

    const [files, setFiles] = useState(null)


    const multiImagePreview = (event) => {
        filesArray.push(event.target.files)
        for (let i = 0; i < filesArray[0].length; i++) {
            filesCollection.push(URL.createObjectURL(filesArray[0][i]))
        }
        setFiles(filesCollection)
    }


    const removeImagePreview = (index) => {
        // const content = filesCollection.splice(index, 1);
    }

    
    return (
        <>
        <div className="container">
            <div class="imgThumbnail">

                    <div class="card" >
                        {files && (files).map((res, index) => (
                            <img src={res} class="card-img-top" alt="thumbnail" key={index}/>
                        ))} 
                        {!files && <img src={thumbnail} class="card-img-top" alt="thumbnail"/>} 
                        
                        <label class="btn btn-primary">
                            Choose Thumbnail file&hellip; <input type="file" style={{display: "none"}} onChange={multiImagePreview}/>
                        </label>

                    </div>
            </div>
        </div>
            
        
            
        </>
    )
}