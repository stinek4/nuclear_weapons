import React from 'react'
import './ContentAvtalen.css'

//Innholdet som synes i App

const ContentAvtalen = (props) => {

    return(
        <div className="array">
            <div className="txt">
                <h2>{props.article}</h2>
                <h3>{props.title}</h3>
                <p>{props.text}</p>    
            </div>
        </div>
    )
}


export default ContentAvtalen