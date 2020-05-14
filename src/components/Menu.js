import React from 'react';
import menu from "../menu.json";
import MenuGrid from './MenuGrid'
import {Router, Route} from 'react-router-dom'

import './Menu.css'
// import {Row, Col} from 'react-simple-flex-grid';

const Menu = () => {


    return(
        <div className="menu">
        <div className="menuContent" gutter={40}>
            {menu.map(
                (m, i) =>
                <MenuGrid key={i} name={m.name} img={m.image} url={m.url} path={m.path} component={m.component}/>
            
            )}
        
        </div>
        </div>
    )
}




export default Menu;