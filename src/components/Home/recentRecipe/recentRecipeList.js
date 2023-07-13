import React from 'react'
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Video } from 'react-feather';
import truncateText from '../../UI/truncate'
import Img6 from '../../../public/images/recentRecipes/img6.jpeg'
import Img7 from '../../../public/images/recentRecipes/img7.jpeg'
import Img8 from '../../../public/images/recentRecipes/img8.jpeg'
import Img9 from '../../../public/images/recentRecipes/img9.jpeg'
import Img10 from '../../../public/images/recentRecipes/img10.jpeg'
import Img11  from '../../../public/images/recentRecipes/img11.jpeg'
import Img12 from '../../../public/images/recentRecipes/img12.jpeg'
import Img13 from '../../../public/images/recentRecipes/img13.jpeg'
import '../../../public/css/recentRecipe.css'
import {convertToBase64} from '../../../util/commons'
import services from '../../../util/services';

export default function recentRecipeList() {

    const categories = ['Popular', 'Pizza', 'Meat', 'Lunch', 'Greens', 'Desserts', 'Snacks', 'Waffles', 'Breakfast', 'Cakes',
    'Fast To Make', 'Grains', 'Pies', 'Sweets', 'Dinner']

    const tags = ['10 ingredients or less', '15 minutes or less', '60 minutes or less', 'Appetizers', 'Bacon', 'Bake', 'Basil', 'BBQ']
    const duration = [
        '5 Minutes',
        '10 Minutes',
        '15 Minutes',
        '30 Minutes',
        '45 Minutes',
        '60 Minutes',
        '60+ Minutes'
    ]

    const serving = [
        1,
        5,
        10,
        '10+'
    ]
    const level = [
        'Easy', 'Medium', 'Hard'
    ]
    

    const generateRandomArray = (type) => {

        const num = tags ? 4 : 5
        var arrayLength = Math.floor(Math.random() * num) + 2
        var randomArray = Array.from({length: arrayLength}, () => Math.floor(Math.random() * type.length-1) + 1);

        let unique = [...new Set(randomArray)];
        
        if(unique){
            const category = ['Waffles']
            unique.map((el) => {
                console.log(unique)
                category.push(type[el])
            });
            const categories = [...new Set(category)];
            return categories;
        }


        
    }




    
    const handleConvert = async (files) => {
        const fileCollection = [];
        for (let i = 0; i < files.length; i++) {
            const base64 = await convertToBase64(files[i]);
            fileCollection.push({
                fileName: files[i].name,
                thumbnail: base64
            });
        }
        return fileCollection;
    }
    const multiImagePreview = async (e) => {
        
       
        const imgs = await handleConvert(e.target.files);
        // console.log(imgs);
        const data = [];

        imgs.forEach((el) => {
            
            // let recipeName = ''
            // switch (el.fileName) {
            //     case 'ppl1.jpeg':
            //         recipeName = 'Marshmallow light and easy cake'
            //         break;
            //     case 'ppl2.jpeg':
            //         recipeName = 'Cupcakes with pistachio pudding'
            //         break;
            //     case 'ppl3.jpeg':
            //         recipeName = 'Baked chicken legs with garlic and Dijon'
            //         break;
            //     case 'ppl4.jpeg':
            //         recipeName = 'French onion soup with veggie stock'
            //         break;
            //     case 'ppl5.jpeg':
            //         recipeName = 'Make chicken paella in under an hour'
            //         break;
            //     case 'ppl6.jpeg':
            //         recipeName = 'Pumpkin soup with cheese and cinnamon'
            //         break;
            //     case 'ppl7.jpeg':
            //         recipeName = 'Easy ground beef recipes with bacon'
            //         break;
            //     case 'ppl8.jpeg':
            //         recipeName = 'Avocado toast with valerianella and egg'
            //         break;
            //     case 'ppl9.jpeg':
            //         recipeName = 'How to make fast margherita pizza'
            //         break;
            //     case 'ppl10.jpeg':
            //         recipeName = 'Avocado toast with spinach and egg'
            //         break;
            //     case 'ppl11.jpeg':
            //         recipeName = 'Deliciously spicy Thai chili crab recipe'
            //         break;
            //     case 'ppl12.jpeg':
            //         recipeName = 'Creamy potato soup with almond milk'
            //         break;
            
            //     default:
            //         recipeName = '';
            // }
            data.push({
                
                "duration": duration[Math.floor(Math.random() * (duration.length -1))],
                "level": level[Math.floor(Math.random() * (level.length -1))],
                "serving": serving[Math.floor(Math.random() * (serving.length -1))],
                "tags": generateRandomArray(tags),
                "category": generateRandomArray(categories),
                "notes": [],
                "mainIngredients": [
                    {
                      "mainList": "2 pisces",
                      "id": Date.now()
                    },
                    {
                      "mainList": "1 ½ cups peeled and chopped golden potato or sweet potato (large bite-size pieces)",
                      "id": Date.now()
                    },
                    {
                      "mainList": "4 Eggs batches flax eggs* (2 flax eggs = 2 Tbsp flaxseed meal / 14 g + 5 Tbsp / 75 ml water)",
                      "id": Date.now()
                    },
                    {
                      "mainList": "0.17 cup chopped walnuts or pecans (or sub other nut or seed of choice)",
                      "id": Date.now()
                    }
                  ],
                  "dressingIngredients": [
                    {
                      "dressingList": "fresh herbs, such as chopped parsley and/or cilantro",
                      "id": Date.now()
                    },
                    {
                      "dressingList": "2 cups blueberries, washed and picked over for stems",
                      "id": Date.now()
                    },
                    {
                      "dressingList": "300 g Mayonaise",
                      "id": Date.now()
                    },
                    {
                      "dressingList": "1 tablespoon honey (light brown sugar or maple syrup also works)",
                      "id": Date.now()
                    }
                  ],
                "nutritionFacts": [
                  {
                    "name": "calories",
                    "unit": "g",
                    "value": "440"
                  },
                  {
                    "name": "satFat",
                    "unit": "g",
                    "value": "440"
                  },
                  {
                    "name": "carbs",
                    "unit": "g",
                    "value": "440"
                  },
                  {
                    "name": "protein",
                    "unit": "g",
                    "value": "44"
                  },
                  {
                    "name": "cholesterol",
                    "unit": "mg",
                    "value": "44"
                  },
                  {
                    "name": "sodium",
                    "unit": "mg",
                    "value": "44"
                  },
                  {
                    "name": "sugar",
                    "unit": "g",
                    "value": "44"
                  },
                  {
                    "name": "fibers",
                    "unit": "g",
                    "value": "444"
                  }
                ],
                "directions": [
                    {
                      "title": "Make the barbecue sauce (or substitute 3/4 to 1 cup bottled sauce):",
                      "steps": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                      "imageUrl": []
                    },
                    {
                      "title": "Cook the chicken (or substitute 2 cups shredded cooked chicken):",
                      "steps": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                      "imageUrl": []
                    },
                    {
                      "title": "Mix the chicken with the barbecue sauce:",
                      "steps": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                      "imageUrl": []
                    }
                  ],
                "author": "612296fc86231100a0631b22",
                "recipeName": el.fileName,
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "thumbnail": el.thumbnail,
                "reviews": [],
              })
        })

        
        console.log(data)
        // data.forEach(async(el)=> {
        //     await services.postRecipe(el)
        //     console.log(`uploaded ${el.recipeName}`)
        // })
        
    }

    return (
        <>
            
            
            <>
            <div className="col form-fields uploadContainer">
                            <div className="container">
                                <div className="row row-cols-2 row-cols-md-4 g-4">
                                </div>
                            </div>
            
                            <div className="form-group mb-3">
                                <input 
                                type="file" 
                                className="form-control" 
                                onChange={(e) => multiImagePreview(e)} 
                                multiple
                                 />
                            </div>
                            <div className='container previewContainer'>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                                {/* {item.imageUrl?.map((el, j) => {
                            return (
                                <div className="col result-item" key={el}>
                                    
                            <div className="card previewImageContainer">
                                <img src={el} className="card-img-top allRecipeImg mb-3 " alt="recipeResult" />
                                <span className='removeImg' onClick={() => removeImagePreview(index, j)}>X</span>
                            </div>
                                
                        </div>
                    )})}  */}
                                </div>
                            </div>
                        </div>     
            </>





          <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img ">
                                            <img src={Img6} className="img-fluid rounded-start " alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                    
                                                </div>
                                                <h5 className="card-title content-title">
                                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("the best fluffy buttermilk pancakes with triple berry sauce").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">The best fluffy buttermilk pancakes with triple berry sauce</Link>
                                                    
                                                </h5>
                                                <p className="card-text ">{truncateText('Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi.Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi')} 
                                <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("the best fluffy buttermilk pancakes with triple berry sauce").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    style={{color: '#1e8aff'}}>Read More</Link>
                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img7} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">
                                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("chocolate banana pancakes").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">Chocolate banana pancakes</Link>
                                                    
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img8} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">
                                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("cinnamon french toast with cream cheese glaze and berry syrup").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">Cinnamon french toast with cream cheese glaze and berry syrup</Link>
                                                    
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img9} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">
                                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("peanut butter pancakes").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">Peanut butter pancakes</Link>
                                                    
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img10} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">
                                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("traditional French breakfast croissant and coffee").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">Traditional French breakfast croissant and coffee</Link>
                                                    
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img11} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">
                                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("one-pot pasta primavera").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">One-pot pasta primavera</Link>
                                                    
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img12} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><Video strokeWidth="2" size="15"/> </span>
                                                        <span><small><b> 0 : 30</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">
                                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("quick & easy chocolate cake with berries from scratch recipe").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">Quick & easy chocolate cake with berries from scratch recipe</Link>
                                                    
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card mb-3 recipe-card">
                                    <div className="row g-0">
                                        <div className="col-md-5 recipe-card-img">
                                            <img src={Img13} className="img-fluid rounded-start" alt="recipe"/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body recipe-card-content">
                                                <div className="mask rgba-white-slight d-flex">
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'clock']} /> </span>
                                                        <span><small><b>30 MINUTES</b></small></span>
                                                    </p>
                                                    <p>
                                                        <span className="card-icon"><FontAwesomeIcon icon={['far', 'thumbs-up']} /> </span>
                                                        <span><small><b>SUPER EASY</b></small></span>
                                                    </p>
                                                </div>
                                                <h5 className="card-title content-title">
                                                    <Link to={{
                                        pathname: `/recipe` ,
                                        search: `?q=${("carrot and walnut cake").replaceAll(" ", "-")}`,
                                        // state: {postId: post._id},
                                    }}
                                    className="content-title">Carrot and walnut cake</Link>
                                                    
                                                </h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
  
        </>
    )
}
