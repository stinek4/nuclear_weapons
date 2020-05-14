import React from 'react';
import './FNForbud.css'
import Search from './Search'
import ContentAvtalen from './ContentAvtalen'

const FNforbud = () => {

    return(
    <div className="TPNW">
       <h1>FNs traktat for å forby atomvåpen</h1>
       <img src="./" alt="paper cranes"></img>
       
       <Search />
       <ContentAvtalen />
    </div>
    )
}

export default FNforbud