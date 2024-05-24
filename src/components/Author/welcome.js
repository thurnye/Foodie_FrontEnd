import React from 'react';
import { Link } from 'react-router-dom';
import Img4 from '../../public/images/directions/img4.jpeg';
import Img9 from '../../public/images/recentRecipes/img9.jpeg';
import Img10 from '../../public/images/recentRecipes/img10.jpeg';
import Img11 from '../../public/images/recentRecipes/img11.jpeg';
import Img12 from '../../public/images/recentRecipes/img12.jpeg';
import Img13 from '../../public/images/recentRecipes/img13.jpeg';
import './author.css';
import parser from 'html-react-parser';
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { getRandomInt } from '../../util/commons';
import ImageLayout from '../Dashboard/Events/Forms/Details/ImageLayout';

const myRecipes = [
  {
    _id: '664e404cb4513dfa42a75f8d',
    recipeName: 'Peanut butter pancakes',
    imgSrc: Img9,
    query: 'peanut butter pancakes',
  },
  {
    _id: '664e404cb4513dfa42a75fad',
    recipeName: 'Traditional French breakfast croissant and coffee',
    imgSrc: Img10,
    query: 'traditional french breakfast croissant and coffee',
  },
  {
    _id: '664e404cb4513dfa42a75fcf',
    recipeName: 'One-pot pasta primavera',
    imgSrc: Img11,
    query: 'one-pot pasta primavera',
  },
  {
    _id: '664e404cb4513dfa42a76015 ',
    recipeName: 'Quick & easy chocolate cake with berries from scratch recipe',
    imgSrc: Img12,
    query: 'quick & easy chocolate cake with berries from scratch recipe',
  },
  {
    _id: '664e404cb4513dfa42a75ff3 ',
    recipeName: 'Carrot and walnut cake',
    imgSrc: Img13,
    query: 'carrot and walnut cake',
  }
];

export default function Welcome({ author }) {
  return (
    <section className='welcome'>
      {author ? (
        <>
          <div className='welcome-heading'>
            <h1>
              Welcome! I’m <span>{author.firstName}</span> from the Foodies
            </h1>
            {/* <div className='welcome-heading-img'>
              <img src={author.avatar} className='img-fluid' hvr-bob alt='' />
            </div> */}
            <Box>
              <CardMedia
                component='img'
                image={author.avatar}
                alt={author.firstName}
                sx={{ pr: 2 }}
              />
            </Box>
          </div>
          <div>
            {author.aboutMe?.map((el, i) => {
              return (
                <Box sx={{ width: '100%', my: 2, px: 1 }} key={getRandomInt()}>
                  {el.type === 'text' && (
                    <Box sx={{ wordWrap: 'wrap' }}>{parser(el.value)}</Box>
                  )}

                  {el.type === 'image' && (
                    <Box sx={{ maxWidth: 650, m: 'auto' }}>
                      <Box sx={{ mb: 3 }}>
                        <Card sx={{ boxShadow: 'none', border: 0 }}>
                          <CardContent>
                            <ImageLayout
                              isMultiple={el.isMultiple}
                              imageList={el.value}
                            />
                          </CardContent>
                        </Card>
                      </Box>
                    </Box>
                  )}

                  {el.type === 'video' && (
                    <Box sx={{ maxWidth: 650, m: 'auto' }}>
                      <Box sx={{ mb: 3 }}>{parser(el.value)}</Box>
                    </Box>
                  )}
                </Box>
              );
            })}
          </div>
          <div className='my-recipes'>
            <div className='my-recipe-heading'>
              <h6>MY RECIPES</h6>
            </div>
            <div className='row row-cols-2 row-cols-md-3 g-4'>
              {myRecipes.map((recipe) => (
                <div className='col my-recipes-list' key={getRandomInt()}>
                  <div className='card'>
                    <img
                      src={recipe.imgSrc}
                      className='card-img-top hvr-bob'
                      alt='...'
                    />
                    <div className=''>
                      <h6 className='card-recipeName'>
                        <Link
                          to={{
                            pathname: `/recipe`,
                            search: `?q=${recipe.recipeName
                              .toLocaleLowerCase()
                              .replaceAll(' ', '-')}`,
                          }}
                          state={{ recipeId: recipe._id }}
                        >
                          {recipe.recipeName}
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        'Loading...'
      )}
    </section>
  );
}
