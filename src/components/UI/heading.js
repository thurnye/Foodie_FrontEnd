import React from 'react'
import './heading.css'



export default function heading(props) {
    return (
        <>
            <div className="headings">
                <h4>{props.title}</h4>
                <div className="strokes"></div>
            </div>
        </>
    )
}
