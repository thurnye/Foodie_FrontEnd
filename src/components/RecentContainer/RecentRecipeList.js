import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Video } from 'react-feather';
import truncateText from '../UI/truncate';
import './RecentRecipe.css';

export default function RecentRecipeList({ recent }) {
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
