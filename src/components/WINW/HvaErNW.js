import React from 'react'
import './HvaErNW.css'
import {Router, NavLink} from 'react-router-dom'

import { createBrowserHistory } from 'history';
import Fisjonsbomben from './Fisjonsbomben';
import Hydrogenbomben from './Hydrogenbomben';
import Noeytronbomben from './Noeytronbomben';
import AOS from 'aos'
import 'aos/dist/aos.css';

const HvaErNW = () => {


    const history = createBrowserHistory();

   
    return(
        <div className="WINW">
            <h1>Hva er atomvåpen?</h1>
            {/* <img src="https://live.staticflickr.com/3792/33230171512_7694af8308_b.jpg" /> */}
            <div data-aos="fade-in" className="WINWbody">
                
                <h3>
                    Atomvåpen er det kraftigste våpenet noensinne oppfunnet.
                    Slike våpens enorme kraft kommer fra frigjøringen av energi som holder atomkjerner sammen...
                </h3>

                <p className="WINWp">
                Atomer som danner grunnlaget for atomvåpen er svært små, så små at det er vanskelig å forestille seg. 
                For å skape et bilde av atomets størrelse, kan du tenke på en baseball. Den er omtrent syv centimeter i diameter. 
                Hvis et atom var på størrelse med en baseball så ville ballen til sammenligning være nesten 5000 kilometer høy. 
                I en kjernefysisk eksplosjon splittes et meget stort antall av atomer i en kjedereaksjon, 
                jo flere atomer som blir spaltet jo sterkere er den eksplosive kraften.

                Det finnes to hovedtyper av atomvåpen. Den første er fisjonsbomben. 
                I fisjonsbomben skjer frigjøring av energi ved splitting (fisjon) av tunge atomkjerner som for eksempel uran og plutonium. 
                Den andre bomben er hydrogenbomben, eller den termonukleære bomben. 
                I hydrogenbomben skjer frigjøring av energi gjennom en sammenslåing (fusjon) av lette atomkjerner, 
                for eksempel isotoper av hydrogen.
                </p>

                <Fisjonsbomben  data-aos="fade-up"/>
                <Hydrogenbomben  data-aos="fade-up"/>
                <Noeytronbomben  data-aos="fade-up"/>
                
            </div>


        <Router history={history}>
            <NavLink to="/"  onClick={() => window.location.assign("/")}>
                <img className="homeButton" src="https://image.flaticon.com/icons/svg/709/709624.svg" title="Tilbake"/>
            </NavLink>
       </Router>
        </div>
    )
}

export default HvaErNW
