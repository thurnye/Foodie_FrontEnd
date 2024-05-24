import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Video } from 'react-feather';
import truncateText from '../../../UI/truncate';
import Img6 from '../../../../public/images/recentRecipes/img6.jpeg';
import Img7 from '../../../../public/images/recentRecipes/img7.jpeg';
import Img8 from '../../../../public/images/recentRecipes/img8.jpeg';
import Img9 from '../../../../public/images/recentRecipes/img9.jpeg';
import Img10 from '../../../../public/images/recentRecipes/img10.jpeg';
import Img11 from '../../../../public/images/recentRecipes/img11.jpeg';
import Img12 from '../../../../public/images/recentRecipes/img12.jpeg';
import Img13 from '../../../../public/images/recentRecipes/img13.jpeg';
import './recentRecipe.css';

export default function recentRecipeList() {
  const recent = [
    {
      recipeName: 'The best fluffy buttermilk pancakes with triple berry sauce',
      description:
        'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
      duration: '30 Minutes',
      thumbnail: Img6,
      level: 'Super Easy',
      isVideo: true,
      link: '/all-recipes',
      length: '0:30',
    },
    {
      recipeName: 'Chocolate banana pancakes',
      description:
        'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
      duration: '30 Minutes',
      thumbnail: Img7,
      level: 'Super Easy',
      isVideo: false,
      link: '/all-recipes',
      length: '0:30',
    },
    {
      recipeName:
        'Cinnamon french toast with cream cheese glaze and berry syrup',
      description:
        'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
      duration: '30 Minutes',
      thumbnail: Img8,
      level: 'Super Easy',
      isVideo: true,
      link: '/all-recipes',
      length: '0:30',
    },
    {
      recipeName: 'Peanut butter pancakes',
      description:
        'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
      duration: '30 Minutes',
      thumbnail: Img9,
      level: 'Super Easy',
      isVideo: false,
      link: '/all-recipes',
      length: '0:30',
    },
    {
      recipeName: 'Traditional French breakfast croissant and coffee',
      description:
        'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
      duration: '30 Minutes',
      thumbnail: Img10,
      level: 'Super Easy',
      isVideo: true,
      link: '/all-recipes',
      length: '0:30',
    },
    {
      recipeName: 'One-pot pasta primavera',
      description:
        'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
      duration: '30 Minutes',
      thumbnail: Img11,
      level: 'Super Easy',
      isVideo: false,
      link: '/all-recipes',
      length: '0:30',
    },
    {
      recipeName:
        'Quick & easy chocolate cake with berries from scratch recipe',
      description:
        'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
      duration: '30 Minutes',
      thumbnail: Img12,
      level: 'Super Easy',
      isVideo: true,
      link: '/all-recipes',
      length: '0:30',
    },
    {
      recipeName: 'Carrot and walnut cake',
      description:
        'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi',
      duration: '30 Minutes',
      thumbnail: Img13,
      level: 'Super Easy',
      isVideo: false,
      link: '/all-recipes',
      length: '0:30',
    },
  ];

  return (
    <>
      {recent?.map((el, i) => (
        <div
          className='card mb-3 recipe-card'
          key={`recent_${el.recipeName}_${i}`}
        >
          <div className='row g-2'>
            <div className='col-md-5 recipe-card-img '>
              <img
                src={el.thumbnail}
                className='img-fluid rounded-start '
                alt='recipe'
              />
            </div>
            <div className='col-md-7'>
              <div className='card-body recipe-card-content'>
                <div className='mask rgba-white-slight d-flex'>
                  {el.isVideo ? (
                    <p>
                      <span className='card-icon'>
                        <Video strokeWidth='2' size='15' />{' '}
                      </span>
                      <span>
                        <small>
                          <b>{el.length}</b>
                        </small>
                      </span>
                    </p>
                  ) : (
                    <>
                      <p>
                        <span className='card-icon'>
                          <FontAwesomeIcon icon={['far', 'clock']} />{' '}
                        </span>
                        <span>
                          <small>
                            <b>{el.duration}</b>
                          </small>
                        </span>
                      </p>
                      <p>
                        <span className='card-icon'>
                          <FontAwesomeIcon icon={['far', 'thumbs-up']} />{' '}
                        </span>
                        <span>
                          <small>
                            <b>{el.level}</b>
                          </small>
                        </span>
                      </p>
                    </>
                  )}
                </div>
                <h5 className='card-title content-title'>
                  <Link to={el.link} className='content-title'>
                    {el.recipeName}
                  </Link>
                </h5>
                <p className='card-text '>
                  {truncateText(el.description)}
                  <Link to={el.link} style={{ color: '#1e8aff' }}>
                    {' '}
                    . . .read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
