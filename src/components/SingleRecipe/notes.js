import React from 'react'
import Heading from '../UI/heading'

export default function notes() {
    return (
        <section className="note">
            <div className="note-heading">
                <Heading title="Notes"/>
            </div>
            <div className="recipe-note">
                <p>*Nutrition info is a rough estimate based on the ingredients. Note that values may vary from case to case.</p>
                <p>*As with all recipes, there is a number of ways you can get things done. If you believe that some of the instructions can be improved, or have a good alternative solution, feel free to leave a comment.</p>
            </div>
        </section>
    )
}
