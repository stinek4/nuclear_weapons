import React from  'react';
import {Router, Route, NavLink, Switch} from 'react-router-dom';
import HvaErNW from './WINW/HvaErNW';
import Humanitarian from './Humanitarian/Humanitarian';
import NWCost from './Cost/NWCost';
import CitiesAppeal from './IcanSave/CitiesAppeal'
import Climate from './ClimateNW/Climate'
import FNForbud from './TPNW/FNforbud';
import { createBrowserHistory} from 'history';

const MenuGrid = (props) => {

const history = createBrowserHistory();

const onClick = (event) => {
    window.location.assign(props.path); 
    window.scrollTo(0, 0);
}
    const componentRegistry = [{
      
        "HvaErNW": HvaErNW,
        "Humanitarian": Humanitarian,
        "NWCost": NWCost,
        "CitiesAppeal": CitiesAppeal,
        "Climate": Climate,
        "FNForbud": FNForbud 
      }]
     console.log(componentRegistry)

    return(
        <div className="menuGrid">
                <div className="menuCard">
                   <Router history={history}>
                       <Switch>
                            <Route components={componentRegistry[props.component]}>
                                <NavLink id="menuLink" to={props.path} onClick={onClick}>
                                    <img src={props.img} alt={""} />
                                    {props.name}
                                    <div className="hoverPointer">
                                    </div>
                                </NavLink>
                            </Route>
                        </Switch>
                    </Router>
                </div>
        </div>
    )
}

export default MenuGrid