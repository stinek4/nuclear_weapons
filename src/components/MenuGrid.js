import React from  'react';
import {Router, Route, NavLink} from 'react-router-dom';

import HvaErNW from './WINW/HvaErNW';
import Humanitarian from './Humanitarian/Humanitarian';
import NWCost from './Cost/NWCost';
import CitiesAppeal from './IcanSave/CitiesAppeal'
import Climate from './ClimateNW/Climate'
import FNForbud from './TPNW/FNforbud';
import { createBrowserHistory } from 'history';

const MenuGrid = (props) => {

const history = createBrowserHistory();

    // state = {
    //     redirect: false
    // }

    // setRedirect = (navigateTo) => {
    //     this.setState({
    //         redirect: true,
    //         path: navigateTo 
    //     })
    // }

    // renderRedirect = () => {
    //     if(this.state.redirect){
    //         return <Redirect to={this.state.path}/>
    //     }
    // }}
   
    const componentRegistry = [{
      
        "HvaErNW": HvaErNW,
        "Humanitarian": Humanitarian,
        "NWCost": NWCost,
        "CitiesAppeal": CitiesAppeal,
        "Climate": Climate,
        "FNForbud": FNForbud 
      }]

      console.log(componentRegistry)
      console.log(props.url.path)

    return(
        <div className="menuGrid">
                <div id="menuCard">
                   <Router history={history}>
                        <Route components={componentRegistry[props.component]}>
                            <NavLink id="menuLink" to={props.path}><img src={props.img} alt={""} />{props.name}</NavLink>
                        </Route>
                    </Router>
                </div>
        </div>
    )
}

export default MenuGrid