import React, { useState } from 'react'
import thumbnail from '../../public/images/placeholders/thumbnail.jpeg'
import {convertToBase64} from '../../util/commons'
export default function MultiFileUploadComponent (props) {

    const filesArray = [];
    const filesCollection = [];

    const [files, setFiles] = useState(null)


    const multiImagePreview = async(event) => {

        const file = event.target.files[0];
        const base64 = await convertToBase64(file);
        setFiles(base64)
        // console.log(base64);
        // const file = event.target.files
        // filesArray.push(file)
        // for (let i = 0; i < filesArray[0].length; i++) {
        //     filesCollection.push(URL.createObjectURL(filesArray[0][i]))
        // }
        // setFiles(filesCollection)
        // const acceptedFiles = []
        // send the thumbnail to the

        // if(file){

        //     for(let i=0; i< file.length; i++){
        //         acceptedFiles.push(file[i])
        //     }
        //     const url = `https://api.cloudinary.com/v1_1/xperiacloud/upload`

        //     acceptedFiles.forEach( async(acceptedFiles)=>{
        //         const formData = new FormData();
        //         formData.append('file', acceptedFiles)
        //         formData.append('upload_preset', 'Xperia')
                
        //         const response = await fetch(url, {
        //             method : 'post',
        //             body: formData
        //         })
        //         const data = await response.json()
        //     })
        
        
        // }
        
                props.getThumbnail(base64);
    }

    return (
        <>
        <div className="container">
            <div className="imgThumbnail">

                    <div className="card" >
                        {/* {files && (files).map((res, index) => ( */}
                            <img src={files || thumbnail} className="card-img-top" alt="thumbnail"/>
                        {/* // ))}  */}
                        {/* {files && <img src={files} className="card-img-top" alt="thumbnail"/>}  */}
                        
                        <label className="btn btn-primary">
                            Choose Thumbnail file&hellip; <input type="file" style={{display: "none"}} onChange={multiImagePreview}/>
                        </label>

                    </div>
            </div>
        </div>
            
        
            
        </>
    )
}