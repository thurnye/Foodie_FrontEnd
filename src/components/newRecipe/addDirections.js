import React, { useState, useEffect } from 'react'
import { Trash2 } from 'react-feather';
import 'react-dropzone-uploader/dist/styles.css'
import {convertToBase64} from '../../util/commons'




export default function AddDirections(props) {
    

    const [directions, setDirections] = useState({
        form: [{
            title: "", 
            steps: "" ,
            imageUrl: []
            
        }]
    });
    const [imgUrl, setImgUrl] = useState(null)
    
    // const [data, setData] = useState(null)

    const [errorMessage, setErrorMessage]=useState(null)

    const [files, setFiles] = useState(null)

    const handleConvert = async (files) => {
        const fileCollection = [];
        for (let i = 0; i < files.length; i++) {
            const base64 = await convertToBase64(files[i]);
            fileCollection.push(base64);
        }
        // console.log({fileCollection})
        return fileCollection;
    }


    const multiImagePreview = async (e, index) => {
        const items = directions.form;
        items[index].imageUrl= await handleConvert(e.target.files)
    }


    const removeImagePreview = (index) => {
        // const content = filesCollection.splice(index, 1);
    }

  
    const handleChange = (e, index) => {
        const items = directions.form;
        items[index][e.target.name]= e.target.value
        setDirections({
            form: items
        });
    };

    useEffect(()=> {
        const items = directions.form
    },[files])

  

    const handleDelete = (index) => {
        const items = directions.form;
        if (items.length > 1) {
            items.splice(index, 1);
            setDirections({
                form: items
            });
        } else {
        window.alert("Last row cant be delete!");
        }
    };

    
    const addNewRow = () => {
        const items = directions.form;
        const blankRow = { title: "", steps: "", imageUrl: []};
        // filesArray = []
        setFiles([])
        setDirections({
            form: [...items, blankRow]
        });
    };

    

    const saveAll = () => {
        // console.log(directions)
        const errMessage =[];
        // check for blank field in directions
        for(let i =0; i < directions.form.length; i++ ){
           
            if(!directions.form[i].title){
                errMessage.push(`*missing title`)
                setErrorMessage(errMessage)
            }
            if(!directions.form[i].steps){
                errMessage.push(`*missing step`)
                setErrorMessage(errMessage)
            }
        }
        // if there is no blank field
        if(errMessage.length === 0){
            // console.log(directions)
            setErrorMessage(null)
            const { form } = directions; 

            
            props.getDirections(form)
            // console.log({form})

        }
    };
    return (
        <>
            <h1>Add Directions</h1>
            {errorMessage && errorMessage && errorMessage.map((el, index) => <div key={index}><span className="requiredField">{el}</span></div>)}
            {directions.form &&
            directions.form.map((item, index) => (
                <div key={index}>
                    <div className="step-del">
                   <h6>Step {index + 1}</h6>           
                   <Trash2 
                        strokeWidth="1" 
                        size="25"
                        color="salmon"
                        onClick={() => handleDelete(index)}
                    />
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col form-fields">
                            <div className="form-fields">
                                <label htmlFor="exampleInputStepTitle" className="form-label">Title</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputStepTitle"
                                name="title" 
                                value={item.title}
                                onChange={(e) => handleChange(e, index)}
                            />
                                        {/* {errors.stepTitle && <span role="alert">{errors.stepTitle.message}</span>} */}
                            </div>
                            <textarea 
                            className="form-control method-steps" 
                            id="exampleFormControlMyRecipeDesc" 
                            rows="8"
                            name="steps"
                            value={item.steps}
                            onChange={(e) => handleChange(e, index)}
                            ></textarea>
                        </div>

                        {/* Images */}
                        <div className="col form-fields">
                            <div className="container">
                                <div className="row row-cols-2 row-cols-md-4 g-4">
                                </div>
                            </div>
            
                            <div className="form-group mb-3">
                                <input 
                                type="file" 
                                className="form-control" 
                                onChange={(e) => multiImagePreview(e, index)} 
                                multiple
                                 />
                            </div>
                            <div className='container previewContainer'>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                                {item.imageUrl.map(el => {
                            return (
                                <div className="col result-item" key={el}>
                                    
                        <div className="card">
                            <img src={el} className="card-img-top allRecipeImg" alt="recipeResult" />
                        </div>
                                
                    </div>
                            )
                    })} 
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            ))}
            <div className="row">
                <div className="col col-md-10 text-right">
                    <input type="button" value="+Add New" onClick={addNewRow} className="btn btn-secondary"/>
                    <input type="button" value="Save" onClick={saveAll} className="ml-2 btn btn-primary"/>
                </div>
            </div>
        </>
    );

}
