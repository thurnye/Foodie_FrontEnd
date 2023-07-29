import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './filter.module.css';

const cats = [
  'Popular', 'Pizza', 'Meat', 'Lunch', 'Greens', 'Desserts',
  'Snacks', 'Waffles', 'Breakfast', 'Cakes', 'Fast To Make',
  'Grains', 'Pies', 'Sweets', 'Dinner'
];

const tags = [
  '10 ingredients or less', '15 minutes or less', '60 minutes or less',
  'Appetizers', 'Bacon', 'Bake', 'Basil', 'BBQ'
];

const FilterRecipes = (props) => {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreTags, setShowMoreTags] = useState(false);

  const categories = cats.sort();
  const { register, handleSubmit,   formState: { errors } } = useForm();

  const onSubmit = (data) => props.getFilters(data);

  const toggleShowMoreCategories = () => {
    setShowMoreCategories((prevShowMoreCategories) => !prevShowMoreCategories);
  };

  const toggleShowMoreTags = () => {
    setShowMoreTags((prevShowMoreTags) => !prevShowMoreTags);
  };

  return (
    <section className="filter">
      <div>
        <h4>Filter Recipes:</h4>
        <p className="text-muted">
          Check multiple boxes below to narrow recipe search results
        </p>
      </div>
      <div className="keywordSearch">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            {/* KeyWord Search */}
            <div className="form-group row">
              <div className="col">
                <input
                  id="keywordSearch"
                  className="form-control"
                  aria-invalid={errors.keywordSearch ? 'true' : 'false'}
                  {...register('keywordSearch', {
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                    },
                  })}
                  placeholder="filter by keyword"
                  type="text"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="filter-indicator">
              <h5>Filter by Categories</h5>
            </div>
            <div className="form-group row">
              <div className="col-sm-9 filter-category-items">
                {categories.slice(0, showMoreCategories ? categories.length : 10).map((el) => (
                  <div className="form-check filter-category-item" key={el}>
                    <input
                      className="form-check-input "
                      type="checkbox"
                      name={el}
                      {...register('options')}
                      defaultValue={el}
                    />
                    <label className="form-check-label text-muted" htmlFor="flexCheckChecked">
                      {el}
                    </label>
                  </div>
                ))}
                {categories.length > 5 && (
                  <div>
                    <a href="javascript:;" className={styles.showMore} onClick={toggleShowMoreCategories}>
                      {showMoreCategories ? 'Show Less-' : 'Show More+'}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="filter-indicator">
              <h5>Filter by Tags</h5>
            </div>
            <div className="form-group row">
              <div className="col-sm-9 filter-tag-items">
                {tags.slice(0, showMoreTags ? tags.length : 7).map((el) => (
                  <div className="form-check filter-tag-item" key={el} >
                    <input
                      className="form-check-input "
                      type="checkbox"
                      name={el}
                      {...register('tags')}
                      defaultValue={el}
                    />
                    <label className="form-check-label text-muted" htmlFor="flexCheckChecked">
                      {el}
                    </label>
                  </div>
                ))}
                {tags.length > 5 && (
                  <div>
                    <a href="javascript:;" className={styles.showMore} onClick={toggleShowMoreTags}>
                      {showMoreTags ? 'Show Less-' : 'Show More+'}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="getForm">
            <button className="btn btn-dark btn-block" type="submit">
              Filter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FilterRecipes;
