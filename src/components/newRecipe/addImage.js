import React, { useState } from 'react'

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
            <div class="row row-cols-2 row-cols-md-4 g-4">

                {(files || []).map((res, index) => (
                    <div key={index} className="imgPreview col ">
                        <img src={res} alt="..." class="card-img-top" onClick={() => removeImagePreview(index)}/>

                    </div>
                ))}
            </div>
        </div>
            
        <div className="form-group mb-3">
            <input type="file" className="form-control" onChange={multiImagePreview} multiple />
        </div>
        </>
    )
}