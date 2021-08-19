import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
    const [uploadedFiles, setUploadedFiles] = useState({
        incomingImage : []
    },
        [])
    const [preview, setPreview] = useState([])
    
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(typeof acceptedFiles)
    const url = `https://api.cloudinary.com/v1_1/xperiacloud/upload`
    

    acceptedFiles.forEach( async(acceptedFiles)=>{
        const formData = new FormData();
        formData.append('file', acceptedFiles)
        formData.append('upload_preset', 'Xperia')
        
        const response = await fetch(url, {
            method : 'post',
            body: formData
        })
        const data = await response.json()
        // console.log(data)

        // push the public_id of each image to the uploadedFiles.incomingImage 
        // create preview
        setPreview(prevState => [...prevState, data])
    })
   


  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      accepts: "image/*",
      multiple: true
    })

    const removeImagePreview = (index) => {
        // const content = preview.splice(index, 1);
        // setPreview(prevState => [...prevState, preview])
    }

  return (
      <>
      <div className="container">
            <div className="row row-cols-2 row-cols-md-4 g-4">

                {/* {(preview || []).map((res, index) => (
                    <div key={index} className="imgPreview col ">
                        <img src={res.url} alt="..." clasName="card-img-top" onClick={() => removeImagePreview(index)}/>

                    </div>
                ))} */}
            </div>
        </div>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
    </>
  )
}
export default MyDropzone;
