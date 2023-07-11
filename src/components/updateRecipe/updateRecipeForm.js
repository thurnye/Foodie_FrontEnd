import React, { useState, useEffect } from 'react'
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
import AddDirections from './addDirections'
import Thumbnail from './thumbnail'

export default function NewRecipeForm() {
    const dispatch = useDispatch()
    const history = useHistory();
    const animatedComponents = makeAnimated();

    const user = useSelector(state => state.userLog.user.user)
    const recipe = useSelector(state => state.recipesData.singleRecipe)
    const [id, setId] = useState()
    // Updated Values
    const [selectedTag, setSelectedTag] = useState(null);
    const [selectedCat, setSelectedCat] = useState(null);
    const [selectedServing, setSelectedServing] = useState(null);
    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [main, setMain] = useState({mainList: "", mainArray : []});
    const [dressing, setDressing] = useState({dressingList: "", dressingArray : []});
    const [note, setNote] = useState({noteList: "", noteArray : []});
    const [directions, setDirections] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)
    const [error, setError] = useState(false)
    const [dataError, setDataError] = useState(null)
    


    // Add the mainingredient inside the mainArray
    useEffect(() => {
        // imported Values
        // console.log(recipe)
        if(recipe){
            // put dressing inside the dressing Array
            const dressingVal = []
            const mainVal = []
            const noteVal = []
            recipe.mainIngredients.forEach(el => { 
                const item = {
                    mainList: el.mainList,
                        id: el.id
                }
                mainVal.push(item)   
            })
            recipe.dressingIngredients.forEach(el => { 
                const item = {
                    dressingList: el.dressingList,
                        id: el.id
                }
                dressingVal.push(item)                
            })
            recipe.notes && recipe.notes.forEach(el => { 
                const item = {
                    noteList: el.noteList,
                        id: el.id
                }
                noteVal.push(item)  
            })
            setId(recipe._id)
            setSelectedCat(recipe.category.map(el => ({value: el, label: el})))
            setSelectedDuration({value:recipe.duration, label: recipe.duration})
            setSelectedLevel({value:recipe.level, label: recipe.level})
            setSelectedServing({value:recipe.serving, label: recipe.serving})
            setSelectedTag(recipe.tags.map(el => ({value: el, label: el})))
            setThumbnail(recipe.thumbnail)
            setMain({
                    mainArray: main.mainArray.concat(mainVal),
                })
            setDressing({
                    dressingArray: dressing.dressingArray.concat(dressingVal),
                })
            setNote({
                    noteArray: note.noteArray.concat(noteVal),
                })
        }
      },[recipe])

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
        } else if(ingredientType === 'note'){
            if (note.noteList !== undefined && note.noteList !== "") {
                setNote({
                  noteArray: note.noteArray.concat({
                    noteList: note.noteList,
                    id: Date.now()
                  }),
                  noteList: ""
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
        }else if(ingredientType === 'note'){
            setNote({
                noteArray: note.noteArray.filter((item) => {
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
    const getDirections = (e) => {
        setDirections(e)
    }
    const getThumbnail = (e) => {
        setThumbnail(e)
    }
    
    
    const onSubmit = async (data) => {
        try{
            let errorMessage= false
            let dataError = []
            const nutrients = [
                {name: 'calories' ,unit: 'g', value:data.calories},
                {name: 'satFat', unit: 'g', value: data.satFat},
                {name: 'carbs', unit: 'g', value: data.carbs},
                {name: 'protein', unit: 'g', value: data.protein},
                {name: 'cholesterol', unit: 'mg', value: data.cholesterol},
                {name: 'sodium', unit: 'mg', value: data.sodium},
                {name: 'sugar', unit: 'g', value: data.sugar},
                {name: 'fibers', unit: 'g', value: data.fibers}
            ]
            
            for (let i=0; i < nutrients.length; i++){
                let value = nutrients[i].value
                if (!value || directions === null ){
                    errorMessage = true
                    dataError.push({name: 'nutrientFact', errorMessage: '*nutrition fact fields are required'})
                    // setError(true)
                }
            }
            // check the option values for unchosen field
            if(
                selectedTag === null ||
                selectedCat === null ||
                selectedServing === null ||
                selectedDuration === null ||
                selectedLevel === null 
                ){  
                    errorMessage = true
                    dataError.push({ name: 'options', errorMessage: '*missing tag, category, serving, duration or level is required'})
                }
                
                // Check for Ingredients
                if( main.mainArray.length === 0 || dressing.dressingArray.length === 0){
                    errorMessage = true
                    dataError.push({name: 'ingredients', errorMessage: '*ingredient field is required'})
                }
                
                // Check for directions
                if( directions === null  || dressing.dressingArray.length === 0){
                    errorMessage = true
                    dataError.push({name: 'directions', errorMessage: '*directions field is required'})
                }
                
                
                setDataError(dataError)
                

            if((errorMessage === false) || (dataError.length === 0)){
                const uTags = [];
                const uCategory = [];
                // console.log(el)
                const tags = selectedTag;
                const category = selectedCat;

                // console.log({tags, category})
                // console.log({selectedLevel, selectedDuration, selectedServing})

                tags.forEach((item) => uTags.push(item.value))
                category.forEach((item) => uCategory.push(item.value))

                const allData = {
                    loggedUser: user._id,
                    recipeName: data.recipe_name,
                    description: data.description,
                    serving: selectedServing.value,
                    category: uCategory,
                    duration: selectedDuration.value,
                    level: selectedLevel.value,
                    tags: uTags,
                    mainIngredients: main.mainArray,
                    dressingIngredients: dressing.dressingArray,
                    directions: directions,
                    notes: note.noteArray,
                    author: user._id,
                    thumbnail: thumbnail,
                    nutritionFacts: nutrients
    
                }
    
                // console.log("AllDATA:",allData)
                const result = await services.postUpdatedRecipe(id, allData)
                console.log(result)
                let token = result.data
                localStorage.setItem('token', token);  
                const userDoc = jwt_decode(token); 

                // store the user in redux state
                dispatch(userActions.login({
                    user: userDoc
                }))
                  
                  history.push("/new-account"); 
            }

            
           





        
        
        }catch(err){
        console.log(err)
        }
    };

    
    let errorIngredient; 
    let errorDirection;
    let errorNutrients;
    let errorOptions;

    dataError && dataError.map(el => {
        
        if(el.name === 'ingredients'){
            errorIngredient = el.errorMessage
        }
        if(el.name === 'directions'){
            errorDirection = el.errorMessage
        }
        if(el.name === 'nutrientFact'){
            errorNutrients = el.errorMessage
        }
        if(el.name === 'options'){
            errorOptions = el.errorMessage
        }
        
        return (errorIngredient,errorDirection, errorNutrients)
    })

    // console.log(recipe)
    return (
        <div className="recipeForm">
            <div className="container">
                {recipe &&
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <div className="form">
                            <div className="received-data">
                                <div className="card mb-3" >
                                    <div className="row g-0">
                                        {/* Name and Description */}
                                        <div className="col-md-8">
                                            <div className="col form-fields">
                                                <label htmlFor="exampleInputRecipeName" className="form-label">Name</label>
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                id="exampleInputRecipeName"
                                                defaultValue={recipe.recipeName} 
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
                                                    rows="10"
                                                    defaultValue={recipe.description} 
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
                                    <div className="col-md-4">
                                        <Thumbnail getThumbnail={getThumbnail} thumbnail={thumbnail}/>
                                    </div>
                                </div>
                            </div>
                                    {/* serving, category, level, duration */}
                                    <div><span role="alert" className="requiredField">{errorOptions}</span></div>
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {/* No of Servings */}
                                    <div className="col form-fields">
                                        <label htmlFor="exampleInputServing" className="form-label">Serving</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={{value:recipe.serving, label: recipe.serving}}
                                            onChange={setSelectedServing}
                                            options={servingOptions}
                                        />
                                    </div>
                                
                                    {/* Category */}
                                    {/* <div className="col form-fields">
                                        <label htmlFor="exampleInputCategory" className="form-label">Category</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={recipe.category}
                                            onChange={setSelectedCat}
                                            options={catOptions}
                                        />
                                    </div> */}
                                    
                                    {/* Duration/Time */}
                                    <div className="col form-fields">
                                        <label htmlFor="exampleInputDuration" className="form-label">Duration</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            defaultValue={{value:recipe.duration, label: recipe.duration}}
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
                                            defaultValue={{value:recipe.level, label: recipe.level}}
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
                                            defaultValue={recipe.tags.map(el => ({
                                                value: el,
                                                label: el
                                            }))}
                                            onChange={setSelectedTag}
                                            options={tagsOptions}
                                        />
                                    </div>
                                    {/* Categories */}
                                    <div className="col form-fields">
                                        <label htmlFor="exampleInputRecipeTag" className="form-label">Category</label>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            defaultValue={recipe.category.map(el => ({
                                                value: el,
                                                label: el
                                            }))}
                                            onChange={setSelectedCat}
                                            options={catOptions}
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
                                                    <button className={ errorNutrients ? " pill-btn btn-danger nav-link active " :  " pill-btn btn-warning nav-link active "} id="pills-nutritionFacts-tab" data-bs-toggle="pill" data-bs-target="#pills-nutritionFacts" type="button" role="tab" aria-controls="pills-nutritionFacts" aria-selected="false">Nutrition Facts</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={ errorIngredient ? " pill-btn btn-danger nav-link " :  " pill-btn btn-warning nav-link  "} id="pills-ingredients-tab" data-bs-toggle="pill" data-bs-target="#pills-ingredients" type="button" role="tab" aria-controls="pills-ingredients" aria-selected="false">Ingredients</button>
                                                </li>
                                            
                                                <li className="nav-item" role="presentation">
                                                    <button className={ errorDirection ? " pill-btn btn-danger nav-link " :  " pill-btn btn-warning nav-link  "}  id="pills-directions-tab" data-bs-toggle="pill" data-bs-target="#pills-directions" type="button" role="tab" aria-controls="pills-directions" aria-selected="false">Direction</button>
                                                </li>
                                            </ul>

                                            {/* Error Message for Tabs */}
                                            <div><span role="alert" className="requiredField">{errorNutrients}</span></div>
                                            <div><span role="alert" className="requiredField">{errorIngredient}</span></div>
                                            <div><span role="alert" className="requiredField">{errorDirection}</span></div>
                                            
                                            

                                            {/* NUTRITIONS-FACTS ITEMS, INGREDIENTS ITEMS, DIRECTIONS-STEPS, TAGS ITEMS */}
                                            <div className="tab-content" id="pills-tabContent">
                                                
                                                {/* NUTRITION FACTS*/}
                                                <div className="tab-pane show active" id="pills-nutritionFacts" role="tabpanel" aria-labelledby="pills-nutritionFacts-tab">
                                                    <div>
                                                        <div className="requiredNutrients">
                                                            <span className="text-muted"><i>*all fields are required</i></span>
                                                        </div>
                                                        <div className="row row-cols-1 row-cols-md-2 g-4">
                                                            {recipe.nutritionFacts &&  recipe.nutritionFacts.map((el,idx) => {
                                                                const name = el.name
                                                                return (
                                                                    <div className="col form-fields" key={el.name}>
                                                                
                                                                        <div className="input-group ">
                                                                            <span className="input-group-text">{name}*</span>
                                                                            <input 
                                                                            type="number" 
                                                                            className="form-control"
                                                                            defaultValue={el.value} 
                                                                            {...register(`${name}` )}
                                                                            required
                                                                            />
                                                                            <input type="hidden" value={el.unit} {...register('unit')}/>
                                                                            <span className="input-group-text">{el.unit}</span>
                                                                        </div>
                                                                    </div> 
                                                                )
                                                            })}
                                                        </div>
                                
                                                    </div>
                                                </div>
                                                
                                                
                                                {/* INGREDIENTS */}
                                                <div className="tab-pane fade " id="pills-ingredients" role="tabpanel" aria-labelledby="pills-ingredients-tab">
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
                                                <div className="tab-pane fade " id="pills-directions" role="tabpanel" aria-labelledby="pills-directions-tab">
                                                        <AddDirections getDirections={getDirections}/>
                                                        
                                                </div> 
                                            </div>

                                        
                                        </div>
                                        
                                        
                                        
                                        
                                    </div>
                                </div>

                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                {/* Additional Note */}
                                <div className="col form-fields">
                                    <label htmlFor="exampleFormControlMyRecipeDesc" className="form-label">Additional Notes</label>

                                            <div>
                                                {note.noteArray.map((item, index) => (
                                                    <ul key={index} className="ingredient-items">
                                                    <li className="ingredient-item">
                                                        {item.noteList}
                                                        <Trash2 
                                                        strokeWidth="1" 
                                                        size="25"
                                                        color="salmon"
                                                        onClick={() => {
                                                            removeMainIngredientItem(item.id, 'note');
                                                        }}
                                                        />
                                                    </li>
                                                    </ul>
                                                ))}
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-12 g-4">
                                                <div className="col form-fields additional-field">
                                                    <textarea 
                                                    type="text"
                                                    name="note" 
                                                    value={note.noteList || ""}
                                                    className="form-control" 
                                                    id="exampleInputRecipeName"
                                                    onChange={(ev) => setNote({...note, noteList: ev.target.value})} 
                                                    ></textarea>
                                                    <input type="button" className="add-input" value="Add" onClick={(e) => addItem(e, 'note')}/>
                                                </div>
                                            </div>
                                    <span className="text-muted"></span>
                                </div>
                                
                            </div>
                            
                            
                                                                        
                                        
                            </div>
                            <div className="getRecipe">  
                                <input type="submit" className="btn btn-dark btn-block submit-user-info" value="Update"/>

                            </div>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}
