import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './AuthorFooter.module.css';
import { Bookmark } from 'react-feather';
import Share from '../Share/Share';
import { baseUrl } from '../../util/http-commons';

const AuthorFooter = ({thumbnail, recipeName, recipeId}) => (
  <div className={styles.AuthorFooter}>
    <div className={`${styles.editor} d-flex `}>
      <div className={`${styles.contentAuthor}`}>
        <Avatar />
        <p>
          <span>
            <small>LAURA DERN</small>
          </span>
          <span className={`text-muted ${styles.textMuted}`}>
            <small>May 08, 2021</small>
          </span>
        </p>
      </div>
      <div className={`${styles.contentShareIcon} d-flex`}>
         <Share
          avatar={thumbnail}
          title={recipeName}
          shareUrl={`${baseUrl}/recipe/${recipeId}`}
        />

        <p className='bookmark'>
          <span className='card-icon'>
            <Bookmark strokeWidth='1' />{' '}
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default AuthorFooter;
