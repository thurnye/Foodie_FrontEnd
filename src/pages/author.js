import React from 'react'
import Partnership from '../components/Author/partnership'
import Welcome from '../components/Author/welcome'
import Category from '../components/Home/recentRecipe/category'
import LatestRecipesList from '../components/Home/recentRecipe/latestRecipesList'
import NewsLetter from '../components/Home/recentRecipe/newsLetter'



export default function author() {
    return (
        <section className="">
            <div className="container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <Welcome/>
                            <Partnership/>
                        </div>
                        <div className="col-md-4">
                                <NewsLetter/>
                                <LatestRecipesList/>
                                <Category/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
