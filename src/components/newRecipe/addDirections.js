import React, { useState } from 'react'
import { Trash2 } from 'react-feather';
import DropZone from './dropZone'




export default function AddDirections() {

    const [directions, setDirections] = useState({
        form: [{ 
            steps: "" ,
            imageUrl:[]
            
        }]
    });
    const [imgUrl, setImgUrl] = useState(null)
    const [data, setData] = useState(null)

    const [errorMessage, setErrorMessage]=useState(null)

   

    const handleChange = (e, index) => {
        const items = directions.form;
        items[index][e.target.name] = e.target.value;
        

        setDirections({
            form: items
        });
    };

  

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
        const blankRow = { steps: "", imageUrl:[]};
        setDirections({
            form: [...items, blankRow]
        });
    };

    

    const saveAll = () => {
        let errMessage;
        // check for blank field in directions
        for(let i =0; i < directions.form.length; i++ ){
            if(!directions.form[i].steps){
                errMessage = `*missing step`
                setErrorMessage(errMessage)
            }
        }

        // if there is no blank field
        if(!errMessage){
            setErrorMessage(null)
            const { form } = directions;   
            console.log("Form data :", form);
            console.log(data)
            
            
            
            

           

            // add the image


            // props.getDirections()
        }

    };




    return (
        <>
            <h1>Add Directions</h1>
            <span className="requiredField">{errorMessage}</span>
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
                            <DropZone/>
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
