import React from 'react'
import {useSelector} from 'react-redux'
import Heading from '../UI/heading'

export default function Notes() {
    const recipe = useSelector(state => state.recipesData.singleRecipe)
    return (
        <section className="note">
            <div className="note-heading">
                <Heading title="Notes"/>
            </div>
            <div className="recipe-note">
                {recipe && recipe.notes.map((el, index) => <p key={index}>*{el.noteList}</p> )}
            </div>
        </section>
    )
}
