import React from 'react';
import Bg2 from '../../public/images/jumbotron/bg2.jpeg';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import truncateText from '../UI/truncate';
import { Share2, Bookmark, Video } from 'react-feather';
import Avatar from '../Avatar/Avatar';
import AuthorFooter from '../AuthorFooter/AuthorFooter';
import styles from './Jumbotron.module.css';

export default function homeJumbotron() {
  return (
    <>
      <section className={`${styles.Jumbotron}`}>
        <div
          className={`text-center ${styles.jumbotronContainer}`}
          style={{ backgroundImage: `url(${Bg2})` }}
        >
          <div className='view overlay my-4'>
            <div className={`container ${styles.container}`}>
              <div className={`card ${styles.jumbotronContent}`}>
                <div className='card-body'>
                  <h5 className='card-title'>
                    <Link
                      to={{
                        pathname: `/recipe`,
                        search: `?q=${'mixed berry pie with fresh fruits'.replaceAll(
                          ' ',
                          '-'
                        )}`,
                      }}
                      state={{ recipeId: '664e404cb4513dfa42a767cc' }}
                      className={styles.contentTitle}
                    >
                      Mixed berry pie with fresh fruits
                    </Link>
                  </h5>

                  <p className='card-text '>
                    {truncateText(
                      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi.Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi'
                    )}
                    <Link
                      to={{
                        pathname: `/recipe`,
                        search: `?q=${'mixed berry pie with fresh fruits'
                          .toLowerCase()
                          .replaceAll(' ', '-')}`,
                      }}
                      state={{ recipeId: '664e404cb4513dfa42a767cc' }}
                      style={{ color: '#1e8aff' }}
                    >
                      Read More
                    </Link>
                  </p>
                  <AuthorFooter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
