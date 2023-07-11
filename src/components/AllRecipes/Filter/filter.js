import React from 'react'
import { useForm } from "react-hook-form";
import $ from 'jquery'

export default function Filter(props) {

    const cats = ['Popular', 'Pizza', 'Meat', 'Lunch', 'Greens', 'Desserts', 'Snacks', 'Waffles', 'Breakfast', 'Cakes',
                        'Fast To Make', 'Grains', 'Pies', 'Sweets', 'Dinner']
    const categories = cats.sort()
    
    const tag = ['10 ingredients or less', '15 minutes or less', '60 minutes or less', 'Appetizers', 'Bacon', 'Bake', 'Basil', 'BBQ']
    const tags = tag.sort()

  


    // console.log(categories)        
    const {
        register, 
        handleSubmit,
        formState: { errors },
      } = useForm();
  
      const onSubmit =  (data) => props.getFilters(data);


    return (
        <section className="filter">
            <div>
                <h4>Filter Recipes:</h4>
                <p className="text-muted">Check multiple boxes below to narrow recipe search results</p>
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
                            aria-invalid={errors.keywordSearch ? "true" : "false"} 
                            {...register("keywordSearch", {
                                pattern: {
                                value: /^[A-Za-z]+$/i ,
                                }
                            })}
                            placeholder="filter by keyword"
                            type="text"/>
                        </div>
                    </div>


                    {/* Categories */}

                    <div className="filter-indicator">
                        <h5>Filter by Categories</h5>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-9 filter-category-items">
                            {
                                categories.map(el => {
                                    return ( 
                                        <div className="form-check filter-category-item" key={el}>
                                            <input 
                                                className="form-check-input " 
                                                type="checkbox" 
                                                name={el}
                                                {...register('options')}
                                                defaultValue= {el} 
                                            />
                                            <label className="form-check-label text-muted" htmlFor="flexCheckChecked">
                                                {el}
                                            </label>
                                        </div>
                                    )
                                })
                                
                            }
                        </div>
                    </div>


                    {/* Tags */}
                    <div className="filter-indicator">
                        <h5>Filter by Tags</h5>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-9 filter-tag-items">
                            {
                                tags.map(el => {
                                    return ( 
                                        <div className="form-check filter-tag-item" key={el}>
                                            <input 
                                                className="form-check-input " 
                                                type="checkbox" 
                                                name={el}
                                                {...register('tags')}
                                                defaultValue= {el} 
                                            />
                                            <label className="form-check-label text-muted" htmlFor="flexCheckChecked">
                                                {el}
                                            </label>
                                        </div>
                                    )
                                })
                                
                            }
                            {/* <p onClick={handleClick}>show more</p> */}
                        </div>
                    </div>

                    </div>
                    <div className="getForm">
                    <button className="btn btn-dark btn-block" type="submit">Filter</button>  
                    </div>
                </form>
            </div>
        </section>
    )
}

// CATEGORY SHUFFLE
$(function () {
    const $this = $(".filter-category-items");
    if ($this.find("div").length > 5) {
      $(".filter-category-items").append(
        '<div><a href="javascript:;" class="showMore"></a></div>'
      );
    }
  
    // If more than 10 items, hide the remaining
    $(".filter-category-items .filter-category-item").slice(0, 10).addClass("shown");
    $(".filter-category-items .filter-category-item").not(".shown").hide();
    $(".filter-category-items .showMore").on("click", function () {
      $(".filter-category-items .filter-category-item").not(".shown").toggle(300);
      $(this).toggleClass("showLess");
    });
  });

//   TAG SHUFFLE
(()=>{
    $(function () {
        const $this = $(".filter-tag-items");
        if ($this.find("div").length > 5) {
          $(".filter-tag-items").append(
            '<div><a href="javascript:;" class="showMore"></a></div>'
          );
        }
      
        // If more than 7, hide the remaining
        $(".filter-tag-items .filter-tag-item").slice(0, 7).addClass("shown");
        $(".filter-tag-items .filter-tag-item").not(".shown").hide();
        $(".filter-tag-items .showMore").on("click", function () {
          $(".filter-tag-items .filter-tag-item").not(".shown").toggle(300);
          $(this).toggleClass("showLess");
        });
      });
      
})()