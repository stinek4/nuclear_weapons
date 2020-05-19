import React from 'react'
import './ContentAvtalen.css'

//Innholdet som synes i App

const ContentAvtalen = (props) => {

    return(
        <div className="array">
            <div data-aos="fade-up" data-aos-anchor="#TPNWarticle" className="txt">
                <h2 id="TPNWarticle">{props.article}</h2>
                <h3>{props.title}</h3>
                <p>{props.text}</p>    
            </div>
        </div>
    )
}


export default ContentAvtalen