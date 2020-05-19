import React from 'react'
import {Router, NavLink} from 'react-router-dom'
import {createBrowserHistory} from 'history';

import Radiation from './Radiation';
import Brannskader from './Brannskader';
import Cancer from './Cancer'

import './Humanitarian.css'
import Reproduction from './Reproduction';

const Humanitarian = () => {
    
    const history = createBrowserHistory();

    return(
        <div className="human">
            <h1>Atomvåpen og humanitære konsekvenser</h1>

       <img className="openHands" src="https://cdn5.vectorstock.com/i/1000x1000/56/29/open-hands-hand-drawn-occult-design-vector-28955629.jpg" alt="open hands"></img>
                <div data-aos="fade-in" className="ConBody">
                    
                    <h3>Atomvåpen er unike i sin destruktive kapasitet. 
                        Ett eneste våpen kan ødelegge en by på et øyeblikk. 
                        En begrenset atomkrig der mindre enn en prosent av verdens atomvåpenarsenal benyttes kan drepe mange 
                        titalls millioner mennesker, skade like mange og utløse en påfølgende global sultkatastrofe på 
                        grunn av klimaendringer.
                    </h3>

                    <p className="ConP">
                        En atomkrig mellom USA og Russland vil medføre at flere hundre millioner mennesker dør øyeblikkelig. 
                        Videre vil verden oppleve en “kjernefysisk vinter” som gjør store deler av kloden ubeboelig. 
                        Vil du vite mer om atomvinter og endringene atomvåpen kan påføre klimaet på kloden? Sjekk ut siden vi har om atomvåpen og klima her:
                        <Router history={history}><NavLink to="/Climate" onClick={() => window.location.assign("/Climate")}>Atomvåpen og klima</NavLink></Router>
                    </p>
                    
                    <p className="ConP">
                        Atomvåpen kan ikke skille sivile fra militære mål, hvilket gjør at all bruk i prinsippet strider mot internasjonal humanitær rett. 
                        Ved detoneringen  av et atomvåpen vil intens varme få kropper til å fordampe. 
                        Trykkbølgen vil rive ned bygninger og infrastruktur og mange vil umiddelbart dø grunnet store mengder stråling. 
                        I tiden etterpå vil mange dø som følge av stråleskader.
                    </p>
                    
                    <Radiation/>
                    <Brannskader />
                    <Cancer />
                    <Reproduction />
                </div>

            <Router history={history}>
            <NavLink to="/"  onClick={() => window.location.assign("/")}>
                <img className="homeButton" src="https://image.flaticon.com/icons/svg/709/709624.svg" title="Tilbake"/>
            </NavLink>
       </Router>
        </div>
    )
}
export default Humanitarian