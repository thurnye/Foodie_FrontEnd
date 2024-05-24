import React from 'react';
import { Link } from 'react-router-dom';
// import Avatar from '../../public/images/imgPlaceholder.jpeg'
import { useSelector } from 'react-redux';
import Signature from '../../public/images/signature.png';

export default function AboutMe() {
  const recipe = useSelector((state) => state.recipesData.singleRecipe);

  // if(recipe){
  //     console.log(recipe)
  //     console.log(recipe.author.firstName)
  // }
  return (
    <>
      <div className='category-container  mb-3 '>
        <div className='card-body'>
          <h5 className='card-title category'>ABOUT ME</h5>
          {recipe && (
            <div className='about-me-container container'>
              <div className='about-me-avatar'>
                <Link
                  to={{
                    pathname: `/author`,
                    search: `?q=${recipe.author.firstName.replaceAll(
                      ' ',
                      '-'
                    )}`,
                    state: { postId: recipe.author._id },
                  }}
                  className='image-content'
                >
                  <img src={recipe.author.avatar} alt='author-avatar' />
                </Link>
              </div>
              <h4>Hi! I’m {recipe.author.firstName}.</h4>
              <p>{recipe.author.slogan}</p>
              <img
                src={Signature}
                alt='author-avatar'
                style={{ width: '100%' }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
