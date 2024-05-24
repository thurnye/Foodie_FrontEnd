import React from 'react';
import { Link } from 'react-router-dom';
import Rp1 from '../../../../public/images/latestRecipes/rp1.jpeg';
import Rp2 from '../../../../public/images/latestRecipes/rp2.jpeg';
import Rp3 from '../../../../public/images/latestRecipes/rp3.jpeg';
import './latestRecipeList.css';

const latestRecipes = [
  {
    _id: '664e404cb4513dfa42a7609e',
    recipeName: 'Cupcakes with coconut oil',
    imgSrc: Rp1,
    query: 'cupcakes with coconut oil',
    date: 'July 17th, 2021',
  },
  {
    _id: '664e404cb4513dfa42a76361',
    recipeName: 'Easy breakfast meal prep',
    imgSrc: Rp2,
    query: 'easy breakfast meal prep',
    date: 'July 17th, 2021',
  },
  {
    _id: '664e404cb4513dfa42a765f8',
    recipeName: 'Brownies with walnuts',
    imgSrc: Rp3,
    query: 'brownies with walnuts',
    date: 'July 17th, 2021',
  }
];

export default function latestRecipesList() {
  return (
    <>
      <div className='category-container latest-recipes mb-3 '>
        <div className='card-body'>
          <h5 className='card-title category'>LATEST RECIPES</h5>
          {latestRecipes.map((el) => <div className='card mb-3' key={el._id}>
            <div className='row g-3'>
              <div className='col-md-5'>
                <img
                  src={el.imgSrc}
                  className='img-fluid rounded-start'
                  alt={el.recipeName}
                />
              </div>
              <div className='col-md-7'>
                <div className=' latest-recipe-body'>
                  <h5 className='card-title latest-recipe-title'>
                    <Link
                      to={{
                        pathname: `/recipe`,
                        search: `?q=${el.recipeName.replaceAll(
                          ' ',
                          '-'
                        )}`,
                    }}
                    state={{recipeId: el._id}}
                      className='content-title'
                    >
                      {el.recipeName}
                    </Link>
                  </h5>
                  <p className='card-text'>
                    <small className='text-muted'>{el.date}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </>
  );
}
