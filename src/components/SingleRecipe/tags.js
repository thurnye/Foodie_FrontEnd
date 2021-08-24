import React from 'react'
import {useSelector} from 'react-redux'

export default function Tags() {
    const recipe = useSelector(state => state.recipesData.singleRecipe)
    return (
        <div className="tags">
            <p>Tags: 
                {recipe && recipe.tags.map((el, index) => <span key={index} className="text-muted recipe-tag" >{el.value}</span>)}
            </p>
        </div>
    )
}
