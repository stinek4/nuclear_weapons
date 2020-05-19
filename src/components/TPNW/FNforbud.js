import React, { useEffect } from 'react';
import './FNForbud.css'
import Search from './Search'
import ContentAvtalen from './ContentAvtalen'
import { Router, NavLink} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const FNforbud = () => {

    const history = createBrowserHistory();

    useEffect(() => {
        // return history.listen(history);
    },[]);

    return(
    <div className="TPNW">
       <h1>FNs traktat for å forby atomvåpen</h1>
       <img className="cranes" src=".//img/cranes.png" alt="paper cranes"></img>
       <Router history={history}>
            <NavLink to="/"  onClick={() => window.location.assign("/")}>
                <img className="homeButton" src="https://image.flaticon.com/icons/svg/709/709624.svg" title="Tilbake"/>
            </NavLink>
       </Router>

       <p className="bodyTPNW one">
           FNs atomvåpenforbud ble vedtatt 7. juli 2017 av 122 stater. 
           Forbudet er en omfattende traktat som forbyr alle former for tilknytning til atomvåpen. 
           Både stater som har atomvåpen og stater som ikke har atomvåpen kan slutte seg til traktaten. 
           En stat som har atomvåpen må gå med på å ødelegge dem i samsvar med en juridisk bindende plan. 
           Traktaten trer i kraft når 50 stater har ratifisert. 
           Før vi fikk forbudet i FN, var atomvåpen det eneste masseødeleggelsesvåpenet som ikke var forbudt.
        </p>
        <p className="bodyTPNW two">
           FNs atomvåpenforbud er en offisiell tekst skrevet på Engelsk, Arabisk, Kinesisk, Spansk, Fransk, 
           Portugisisk og Russisk. Traktaten er dessverre ikke oversatt til Norsk, men under kan du lese og 
           søke i den engelske versjonen.
        </p>
       <Search />
       <ContentAvtalen />
    </div>
    )
}

export default FNforbud