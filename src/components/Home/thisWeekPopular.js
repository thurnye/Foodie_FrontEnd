import React from 'react';
import { Link } from 'react-router-dom';

import Ppl1 from '../../public/images/popular/ppl1.jpeg';
import Ppl2 from '../../public/images/popular/ppl2.jpeg';
import Ppl3 from '../../public/images/popular/ppl3.jpeg';
import Ppl4 from '../../public/images/popular/ppl4.jpeg';
import Ppl5 from '../../public/images/popular/ppl5.jpeg';
import Ppl6 from '../../public/images/popular/ppl6.jpeg';
import Ppl7 from '../../public/images/popular/ppl7.jpeg';
import Ppl8 from '../../public/images/popular/ppl8.jpeg';
import Ppl9 from '../../public/images/popular/ppl9.jpeg';
import Ppl10 from '../../public/images/popular/ppl10.jpeg';
import Ppl11 from '../../public/images/popular/ppl11.jpeg';
import Ppl12 from '../../public/images/popular/ppl12.jpeg';

const recipes = [
  {
    _id: '664e404cb4513dfa42a7607a',
    recipeName: 'Marshmallow light and easy cake',
    imgSrc: Ppl1,
    query: 'marshmallow light and easy cake',
  },
  {
    _id: '664e404cb4513dfa42a7609e',
    recipeName: 'Cupcakes with pistachio pudding',
    imgSrc: Ppl2,
    query: 'cupcakes with pistachio pudding',
  },
  {
    _id: '664e404cb4513dfa42a76038',
    recipeName: 'Baked chicken legs with garlic and Dijon',
    imgSrc: Ppl3,
    query: 'baked chicken legs with garlic and Dijon',
  },
  {
    _id: '664e404cb4513dfa42a760e0',
    recipeName: 'French onion soup with veggie stock',
    imgSrc: Ppl4,
    query: 'french onion soup with veggie stock',
  },
  {
    _id: '664e404cb4513dfa42a76103',
    recipeName: 'Make chicken paella in under an hour',
    imgSrc: Ppl5,
    query: 'make chicken paella in under an hour',
  },
  {
    _id: '664e404cb4513dfa42a76124',
    recipeName: 'Pumpkin soup with cheese and cinnamon',
    imgSrc: Ppl6,
    query: 'pumpkin soup with cheese and cinnamon',
  },
  {
    _id: '664e404cb4513dfa42a760be',
    recipeName: 'Easy ground beef recipes with bacon',
    imgSrc: Ppl7,
    query: 'easy ground beef recipes with bacon',
  },
  {
    _id: '664e404cb4513dfa42a76059',
    recipeName: 'Avocado toast with valerianella and egg',
    imgSrc: Ppl8,
    query: 'avocado toast with valerianella and egg',
  },
  {
    _id: '664e404cb4513dfa42a761af',
    recipeName: 'How to make fast margherita pizza',
    imgSrc: Ppl9,
    query: 'how to make fast margherita pizza',
  },
  {
    _id: '664e404cb4513dfa42a7616a',
    recipeName: 'Avocado toast with spinach and egg',
    imgSrc: Ppl10,
    query: 'avocado toast with spinach and egg',
  },
  {
    _id: '664e404cb4513dfa42a76148',
    recipeName: 'Deliciously spicy Thai chili crab recipe',
    imgSrc: Ppl11,
    query: 'deliciously spicy Thai chili crab recipe',
  },
  {
    _id: '664e404cb4513dfa42a7618e',
    recipeName: 'Creamy potato soup with almond milk',
    imgSrc: Ppl12,
    query: 'creamy potato soup with almond milk',
  },
];

export default function thisWeekPopular() {
  return (
    <>
      <section className='popular-this-week'>
        <div className='container popular-container'>
          <span></span>
          <h5>The most popular recipes this week</h5>
          <span></span>
        </div>
        <div className='container'>
          <div className='row'>
            {recipes.map((el) => (
              <div className='col-lg-2 col-md-3 col-sm-4 col-6' key={el._id}>
                <div className='card'>
                  <img
                    className='card-img-top'
                    src={el.imgSrc}
                    alt={el.recipeName}
                  />
                  <div className='card-body popular-body'>
                    <h6 className='card-title popular-week-title '>
                      <Link
                        to={{
                          pathname: `/recipe/${el._id}`,
                          search: `?q=${el.query.replaceAll(
                            ' ',
                            '-'
                          )}`,
                        }}
                        state={{recipeId: el._id}}
                      >
                        {el.recipeName}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
