import React, { useState } from 'react'
import {convertToBase64} from '../../util/commons'


const AddImg = ()  => {
    const [postImage, setPostImage] = useState()

    const multiImagePreview = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertToBase64(file);
        setPostImage(base64)
        console.log(base64);
        
    }
  return (
    <div className="container">
        <div class="input-group mb-3">
        <img src={postImage} className="card-img-top" alt="thumbnail" />
            <input type="file" class="form-control" id="inputGroupFile02" onChange={multiImagePreview}/>
            <label class="input-group-text" for="inputGroupFile02">Upload</label>
        </div>
    </div>
  )
}

export default AddImg

