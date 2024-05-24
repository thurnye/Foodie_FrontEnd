import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../public/images/imgPlaceholder.jpeg';

export default function Avatar() {
  return (
    <>
      <Link
        to={{
          pathname: `/author`,
          // search: `?q=${("mixed berry pie with fresh fruits").replaceAll(" ", "-")}`,
        //   state: {postId: post._id},
        }}
        className='image-content'
      >
        <img src={placeholder} alt='author-avatar' />
      </Link>
    </>
  );
}
