import React from 'react';
import menu from "../menu.json";
import MenuGrid from './MenuGrid'

import './Menu.css'

const Menu = () => {


    return(
        <div className="menu">
           <img id="fp-origami" src="./img/origami_tall.png" alt="origamifugler"></img>
        <div className="menuContent" gutter={40}>
            {menu.map(
                (m, i) =>
                <MenuGrid key={i} name={m.name} img={m.image} url={m.url} path={m.path} component={m.component}/>
                
                )}
        
        </div>
        <section className="fp-timeline">
      <iframe id="fpTimeline" title="timeline" src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Zos4g950-sszhUcwZOEkVwFM7YYXfCq9TgVqC25EIk0&font=Georgia-Helvetica&lang=no&timenav_position=top&initial_zoom=1&height=500' width='100%' height='500' allowFullScreen frameBorder='0'></iframe>
      </section>
      
        </div>
    )
}




export default Menu;