import React, { useState } from 'react';
import Partnership from '../../components/Author/partnership';
import Welcome from '../../components/Author/welcome';
import Category from '../../components/Home/RightContents/Categories/category';
import LatestRecipesList from '../../components/Home/RightContents/LatestRecipe/latestRecipesList';
import NewsLetter from '../../components/Home/RightContents/NewsLetter/newsLetter';
import { useLocation } from 'react-router';
import services from '../../util/services';
import { useEffect } from 'react';

export default function Author() {
  const location = useLocation();
  const authorId = location.state?.authorId;
  const [author, setAuthor] = useState()

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await services.findUserById(authorId);
      setAuthor(result.data.user);
    };

    fetchRecipe();
  }, [authorId]);
  return (
    <section className=''>
      <div className='container'>
        <div className='card mb-3'>
          <div className='row g-0'>
            <div className='col-md-8'>
              <Welcome author={author}/>
              <Partnership />
            </div>
            <div className='col-md-4'>
              <NewsLetter />
              <LatestRecipesList />
              <Category />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
