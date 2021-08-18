import React, { useState } from 'react'
import jwt_decode from "jwt-decode";
import {Link } from 'react-router-dom';
import { Edit, Trash2 } from 'react-feather';
import MetaData from '../metaData'


import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import {useSelector, useDispatch} from 'react-redux'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import services from '../../util/services'
import '../../public/css/newRecipe.css'
import {userActions} from '../../store/userSlice'
import { data } from 'jquery';

export default function NewRecipeForm() {
    // console.log(Tags)
    const dispatch = useDispatch()
    const history = useHistory();
    const animatedComponents = makeAnimated();

    const user = useSelector(state => state.userLog.user.user)
    const [selectedTag, setSelectedTag] = useState(null);
    const [selectedCat, setSelectedCat] = useState(null);
    const [selectedServing, setSelectedServing] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [main, setMain] = useState({mainList: "", mainArray : []});
    const [dressing, setDressing] = useState({dressingList: "", dressingArray : []});

    const {
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm();

    const tagsOptions = []
    const servingOptions = []
    const catOptions = []
    const durationOptions = []
    const levelOptions = []
    
    MetaData[0].tags.forEach(el => {
        tagsOptions.push(
            { value: el, label: el }
        )
    })
    MetaData[0].serving.forEach(el => {
        servingOptions.push(
            { value: el, label: el }
        )
    })
    MetaData[0].category.forEach(el => {
        catOptions.push(
            { value: el, label: el }
        )
    })
    MetaData[0].duration.forEach(el => {
        durationOptions.push(
            { value: el, label: el }
        )
    })
    MetaData[0].level.forEach(el => {
        levelOptions.push(
            { value: el, label: el }
        )
    })

   

    const addItem = (e, ingredientType) => {
        e.preventDefault();
        if(ingredientType === 'main'){
            if (main.mainList !== undefined && main.mainList !== "") {
                setMain({
                  mainArray: main.mainArray.concat({
                    mainList: main.mainList,
                    id: Date.now()
                  }),
                  mainList: ""
                });
            }
        }else{
            if (dressing.dressingList !== undefined && dressing.dressingList !== "") {
                setDressing({
                  dressingArray: dressing.dressingArray.concat({
                    dressingList: dressing.dressingList,
                    id: Date.now()
                  }),
                  dressingList: ""
                });
            }
        }
        
    }
   

    const removeMainIngredientItem = (id,ingredientType) => {
        if(ingredientType === 'main'){
            setMain({
                mainArray: main.mainArray.filter((item) => {
                  return item.id !== id;
                })
            });
        }else{
            setDressing({
                dressingArray: dressing.dressingArray.filter((item) => {
                  return item.id !== id;
                })
            });
        }
        

        
    }
    
    const onSubmit = async (data) => {
        try{
            const allData = {
                recipeName: data.recipe_name,
                description: data.description,
                serving: [selectedServing],
                category: [selectedCat],
                duration: [selectedDuration],
                level: [selectedLevel],
                tags: selectedTag,
                mainIngredients: main.mainArray,
                dressingIngredients: dressing.dressingArray
            }
            console.log("AllDATA:",allData)
           





        //   const result =  await services.postEdit(user._id, data)
        //   console.log(result)
        //   let token = result.data
        //   localStorage.setItem('token', token);  
        //   const userDoc = jwt_decode(token); 

        //   // store the user in redux state
        //   dispatch(userActions.login({
        //     user: userDoc
        //   }))
        //   history.push("/");
        
        }catch(err){
        console.log(err)
        }
    };
    return (
        <div className="recipeForm">
            <div className="container">
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                        <div className="received-data">
                            {/* Name and Description */}
                            <div className="row row-cols-1 row-cols-md-12 g-4">
                               
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputRecipeName" className="form-label">Name</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleInputRecipeName" 
                                     aria-invalid={errors.recipe_name ? "true" : "false"} 
                                    {...register("recipe_name", {
                                        required: "Recipe Name is required*",
                                        pattern: {
                                        message: "recipe name required*"
                                        }
                                    })}
                                    />
                                    {errors.recipe_name && <span role="alert" className="requiredField">{errors.recipe_name.message}</span>}
                                </div>
                                {/* Description */}
                                <div className="col form-fields">
                                    <label htmlFor="exampleFormControlMyRecipeDesc" className="form-label">Tell us briefly about your recipe </label>
                                    <textarea 
                                    className="form-control" 
                                    id="exampleFormControlMyRecipeDesc" 
                                    rows="5"
                                    aria-invalid={errors.description ? "true" : "false"}
                                    {...register("description", {
                                    required: "Description field is required*",
                                    pattern: {
                                        message: "required*"
                                        }
                                    })}
                                    ></textarea>
                             
                                    {errors.description && <span role="alert" className="requiredField">{errors.description.message}</span>}
                                </div>
                                
                            </div>
                            
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {/* No of Servings */}
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputServing" className="form-label">Serving</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={selectedServing}
                                        onChange={setSelectedServing}
                                        options={servingOptions}
                                    />
                                </div>
                              
                                {/* Category */}
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputCategory" className="form-label">Category</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={selectedCat}
                                        onChange={setSelectedCat}
                                        options={catOptions}
                                    />
                                </div>
                                
                                {/* Duration/Time */}
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputDuration" className="form-label">Duration</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={selectedDuration}
                                        onChange={setSelectedDuration}
                                        options={durationOptions}
                                    />
                                </div>
                                
                                {/* Level of Difficulty */}
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputLevel" className="form-label">Level</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={selectedLevel}
                                        onChange={setSelectedLevel}
                                        options={levelOptions}
                                    />
                                </div>
                                
                            </div>
                            
                            {/* Tags */}
                            <div className="row row-cols-1 row-cols-md-12 g-4">
                               
                                <div className="col form-fields">
                                    <label htmlFor="exampleInputRecipeTag" className="form-label">Choose Tags</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                        defaultValue={selectedTag}
                                        onChange={setSelectedTag}
                                        options={tagsOptions}
                                    />
                                </div>
                                
                                
                            </div>
                            
                               {/* NUTRITIONS, INGREDIENTS, DIRECTIONS, TAGS */}
                        <div className="card mb-3 recipeInformation" >
                            <div className="row g-0">
                                <div className="col-md-12">
                                    {/* TAB BUTTONS */}
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className=" pill-btn btn-warning nav-link " id="pills-nutritionFacts-tab" data-bs-toggle="pill" data-bs-target="#pills-nutritionFacts" type="button" role="tab" aria-controls="pills-nutritionFacts" aria-selected="false">Nutrition Facts</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className=" pill-btn btn-warning nav-link active" id="pills-ingredients-tab" data-bs-toggle="pill" data-bs-target="#pills-ingredients" type="button" role="tab" aria-controls="pills-ingredients" aria-selected="false">Ingredients</button>
                                        </li>
                                       
                                        <li className="nav-item" role="presentation">
                                            <button className=" pill-btn btn-warning nav-link" id="pills-directions-tab" data-bs-toggle="pill" data-bs-target="#pills-directions" type="button" role="tab" aria-controls="pills-directions" aria-selected="false">Direction</button>
                                        </li>
                                    </ul>

                                    {/* NUTRITIONS-FACTS ITEMS, INGREDIENTS ITEMS, DIRECTIONS-STEPS, TAGS ITEMS */}
                                    <div className="tab-content" id="pills-tabContent">
                                        
                                        {/* NUTRITION FACTS*/}
                                        <div className="tab-pane " id="pills-nutritionFacts" role="tabpanel" aria-labelledby="pills-nutritionFacts-tab">
                                            <div>
                                                <div className="requiredNutrients">
                                                    <span className="text-muted"><i>*all fields are required</i></span>
                                                </div>
                                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                                    {MetaData[0].nutrients.map(el => {
                                                        const name = el.name
                                                        return (
                                                            <div className="col form-fields" key={el.name}>
                                                        
                                                                <div className="input-group ">
                                                                    <span className="input-group-text">{name}*</span>
                                                                    <input type="number" className="form-control" 
                                                                    aria-invalid={errors.name ? "true" : "false"} 
                                                                    {...register(`${name}`, {
                                                                        required: "required*",
                                                                        pattern: {
                                                                        message: "required*"
                                                                        }
                                                                    })}
                                                                    />
                                                                    <span className="input-group-text">{el.unit}</span>
                                                                </div>
                                                                {errors.name && <span role="alert" className="requiredField">{errors.name.message}</span>}
                                                            </div> 
                                                        )
                                                    })}
                                                </div>
                           
                                            </div>
                                        </div>
                                        
                                        
                                        {/* INGREDIENTS */}
                                        <div className="tab-pane fade show active" id="pills-ingredients" role="tabpanel" aria-labelledby="pills-ingredients-tab">
                                        <div className="card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-6 ingredient-container-main">
                                                    <h6>Main Ingredients</h6>
                                                        <div>
                                                            {main.mainArray.map((item, index) => (
                                                                <ul key={index} className="ingredient-items">
                                                                <li className="ingredient-item">
                                                                    {item.mainList}
                                                                    <Trash2 
                                                                    strokeWidth="1" 
                                                                    size="25"
                                                                    color="salmon"
                                                                    onClick={() => {
                                                                        removeMainIngredientItem(item.id, 'main');
                                                                    }}
                                                                    />
                                                                </li>
                                                                </ul>
                                                            ))}
                                                        </div>
                                                        <div className="row row-cols-1 row-cols-md-12 g-4">
                                                            <div className="col form-fields additional-field">
                                                                <input 
                                                                type="text"
                                                                name="mainIngredientItem" 
                                                                value={main.mainList || ""}
                                                                className="form-control" 
                                                                id="exampleInputRecipeName"
                                                                onChange={(ev) => setMain({...main, mainList: ev.target.value})} 
                                                                />
                                                                <input type="button" className="add-input" value="Add" onClick={(e) => addItem(e, 'main')}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 ingredient-container-dressing">
                                                        <h6>Dressing Ingredients</h6>
                                                        <div>
                                                            {dressing.dressingArray.map((item, index) => (
                                                                <ul key={index} className="ingredient-items">
                                                                <li className="ingredient-item">
                                                                    {item.dressingList}
                                                                    
                                                                    <Trash2 
                                                                    strokeWidth="1" 
                                                                    size="25"
                                                                    color="salmon"
                                                                    onClick={() => {
                                                                        removeMainIngredientItem(item.id, 'dressing');
                                                                    }}
                                                                    />
                                                                </li>
                                                                </ul>
                                                            ))}
                                                        </div>
                                                        <div className="row row-cols-1 row-cols-md-12 g-4">
                                                            <div className="col form-fields additional-field">
                                                                <input 
                                                                type="text"
                                                                name="mainIngredientItem" 
                                                                value={dressing.dressingList || ""}
                                                                className="form-control" 
                                                                id="exampleInputRecipeName"
                                                                onChange={(ev) => setDressing({...dressing, dressingList: ev.target.value})} 
                                                                />
                                                                <input type="button" className="add-input" value="Add" onClick={(e) => addItem(e,'dressing')}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 

                                        {/* DIRECTIONS */}
                                        <div className="tab-pane fade" id="pills-directions" role="tabpanel" aria-labelledby="pills-directions-tab">
                                            directions
                                        </div> 
                                    </div>

                                   
                                </div>
                                
                                
                                
                                
                            </div>
                        </div>

                    
                                
                        </div>
                        <div className="getRecipe">  
                            <input type="submit" className="btn btn-dark btn-block submit-user-info"/>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
