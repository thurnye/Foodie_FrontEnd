import React, { useState, useEffect } from 'react'
import { Trash2 } from 'react-feather';
import 'react-dropzone-uploader/dist/styles.css'
import {convertToBase64} from '../../util/commons'
import   './addDirection.css';




export default function AddDirections(props) {
    const {getDirections} = props;
    

    const [directions, setDirections] = useState({
        form: [{
            title: "", 
            steps: "" ,
            imageUrl: []
            
        }]
    });


    const [errorMessage, setErrorMessage]=useState(null)


    const handleConvert = async (files) => {
        const fileCollection = [];
        for (let i = 0; i < files.length; i++) {
            const base64 = await convertToBase64(files[i]);
            fileCollection.push(base64);
        }
        return fileCollection;
    }


    const multiImagePreview = async (e, index) => {
        if(e.target.files.length > 3 ) {
            return alert('Maximum of 3 files allowed');
        };
        const direction = [...directions.form]; 
        const item = { ...direction[index] }; 
        const imgs = await handleConvert(e.target.files);
        item.imageUrl = imgs;
        direction[index] = item; 
        const updatedDirections = { ...directions, form: direction };
        setDirections(updatedDirections);
        
    }


    const removeImagePreview = (itemIndex, fileIndex) => {
        const direction = [...directions.form]; 
        const item = { ...direction[itemIndex] }; 
        const imgs = [...item.imageUrl];
      
        imgs.splice(fileIndex, 1);

        item.imageUrl = imgs;
        direction[itemIndex] = item; 
        const updatedDirections = { ...directions, form: direction };
        setDirections(updatedDirections);
    }

  
    const handleChange = (e, index) => {
        const items = directions.form;
        items[index][e.target.name]= e.target.value
        setDirections({
            form: items
        });
    };

    useEffect(() => {
        const errMessage =[];
        // check for blank field in directions
        for(let i = 0; i < directions.form.length; i++ ){
           
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
            setErrorMessage(null)
            const { form } = directions; 
            getDirections(form);

        };
    },[directions])

  

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
        setDirections({
            form: [...items, blankRow]
        });
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
                        <div className="col form-fields uploadContainer">
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
                                {item.imageUrl?.map((el, j) => {
                            return (
                                <div className="col result-item" key={el}>
                                    
                            <div className="card previewImageContainer">
                                <img src={el} className="card-img-top allRecipeImg mb-3 " alt="recipeResult" />
                                <span className='removeImg' onClick={() => removeImagePreview(index, j)}>X</span>
                            </div>
                                
                        </div>
                    )})} 
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            ))}
            <div className="row">
                <div className="col col-md-10 text-right">
                    <input type="button" value="+Add New" onClick={addNewRow} className="btn btn-secondary"/>
                </div>
            </div>
        </>
    );

}
